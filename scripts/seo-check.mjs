import assert from 'node:assert/strict';
const base = process.argv[2] || 'http://127.0.0.1:3000';
const canonical = 'https://www.amanyadav.dev';
let failures = 0;
const titles = new Set();
const internalPaths = new Set();
for (const path of ['/', '/projects', '/contact', '/privacy', '/terms']) {
  try {
    const response = await fetch(base + path, { signal: AbortSignal.timeout(20000) });
    const html = await response.text();
    const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
    const canonicals = [...html.matchAll(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/g)].map(m => m[1]);
    assert.equal(response.status, 200);
    assert.deepEqual(canonicals.map(url => new URL(url).href), [canonical + (path === '/' ? '/' : path)]);
    assert.ok(title);
    assert.ok(!titles.has(title), 'Duplicate title');
    titles.add(title);
    assert.match(html, /name="description" content="[^"]+"/);
    assert.ok(/property="og:image"/.test(html), 'Missing Open Graph image');
    assert.equal([...html.matchAll(/<h1\b/g)].length, 1);
    assert.ok(!/content="[^"]*noindex/.test(html));
    assert.ok(!/Placeholder testimonial|Cookieless traffic analytics/.test(html));
    const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)].map(m => JSON.parse(m[1]));
    assert.ok(schemas.length);
    for (const schema of schemas.flat()) {
      assert.ok(schema['@type'], 'Schema type missing');
      if (schema['@type'] === 'BreadcrumbList') {
        schema.itemListElement.forEach((item,index) => {assert.equal(item.position,index+1);assert.ok(item.item.startsWith(canonical));});
      }
    }
    for (const match of html.matchAll(/<a[^>]*href="([^"#]+)"/g)) {
      if (match[1].startsWith('/')) internalPaths.add(match[1].split('#')[0]);
    }
    console.log(JSON.stringify({path, status:response.status, title, canonical:canonicals[0], schemas:schemas.length, result:'PASS'}));
  } catch (error) { failures++; console.error(path, error.message); }
}
for (const path of ['/robots.txt', '/sitemap.xml']) {
  const response = await fetch(base + path);
  const body = await response.text();
  try { assert.equal(response.status,200); assert.ok(body.includes(canonical)); if(path.endsWith('.xml')) {const urls=[...body.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);assert.equal(urls.length,5);assert.equal(new Set(urls).size,5);assert.ok(urls.every(u=>u.startsWith(canonical)));} console.log(path,'PASS'); } catch(error) { failures++; console.error(path,error.message); }
}
const missing = await fetch(base + '/definitely-not-a-page');
if (missing.status !== 404) { failures++; console.error('404 route failed'); }
for (const path of internalPaths) {
  const response = await fetch(base + path);
  if (response.status !== 200) {failures++;console.error('Broken internal link',path,response.status);}
}
for (const path of ['/opengraph-image','/apple-icon','/icon.svg']) {
  const response = await fetch(base + path);
  if (response.status !== 200 || !response.headers.get('content-type')?.startsWith('image/')) { failures++;console.error('Image response failed',path); }
}
console.log('Internal links and generated social/icon responses checked');
if(base.startsWith('http://127.0.0.1')) {
  const invalid = await fetch(base+'/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:'{}'});
  assert.equal(invalid.status,400); console.log('Contact invalid-input rejection PASS (no email sent)');
}
process.exitCode = failures ? 1 : 0;
