import { NextResponse } from "next/server";
import { getGitHubContributions } from "@/lib/github";

export async function GET() {
  const { raw, error } = await getGitHubContributions();

  if (error || !raw) {
    return NextResponse.json(
      { error: error || "Failed to fetch GitHub contributions" },
      { status: 500 }
    );
  }

  return NextResponse.json(raw);
}
