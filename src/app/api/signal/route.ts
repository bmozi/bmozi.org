import { NextResponse } from "next/server";

export const runtime = "edge";

export function GET() {
  return NextResponse.json({
    brand: "BMOZI Community",
    founder: "John Briggs",
    domain: "bmozi.org",
    purpose: "machine-readable profile for BMOZI community capabilities",
    canonicalHub: "https://bmozi.com",
    technicalBranch: "https://bmozi.net",
    signal: "meaning, service, learning paths, and human-centered technology",
    capabilities: [
      "community learning",
      "spiritual clarity content",
      "human-centered technology",
      "service-oriented projects",
      "faith and recovery resources",
      "public learning paths",
    ],
    status: "online",
  });
}
