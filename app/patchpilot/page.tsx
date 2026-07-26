import type { Metadata } from "next";
import { PatchPilotPage } from "./PatchPilotPage";

export const metadata: Metadata = {
  title: "PatchPilot | API change intelligence",
  description:
    "Compare API versions, find affected code, and create review-ready migration patches before integrations fail.",
  alternates: {
    canonical: "/patchpilot/",
  },
  openGraph: {
    title: "PatchPilot | Your API changed. Here is the patch.",
    description:
      "Deterministic API change detection, affected-code analysis, and review-ready migration patches.",
    url: "/patchpilot/",
  },
};

export default function Page() {
  return <PatchPilotPage />;
}
