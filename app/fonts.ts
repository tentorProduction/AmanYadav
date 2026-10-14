import { Caveat, DM_Sans, Instrument_Serif } from "next/font/google";
export const sans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], display: "swap", variable: "--font-sans" });
export const display = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], display: "swap", variable: "--font-display" });
export const handwritten = Caveat({ subsets: ["latin"], weight: ["500", "600"], display: "swap", variable: "--font-hand" });
