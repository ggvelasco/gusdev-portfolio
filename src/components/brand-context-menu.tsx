"use client";

import { DownloadIcon, TriangleDashedIcon, TypeIcon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { toast } from "sonner";

import { copyText } from "@/utils/copy";

import { getGusWordmarkSVG } from "./gus-wordmark";
import { getGusDevMarkSVG, GusDevMark } from "./gusdev-mark";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "./ui/context-menu";

export function BrandContextMenu({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>

      <ContextMenuContent className="w-64">
        <ContextMenuItem
          onClick={() => {
            const svg = getGusDevMarkSVG(
              resolvedTheme === "light" ? "#000" : "#fff"
            );
            copyText(svg);
            toast.success("Copied Mark as SVG");
          }}
        >
          <GusDevMark />
          Copy Mark as SVG
        </ContextMenuItem>

        <ContextMenuItem
          onClick={() => {
            const svg = getGusWordmarkSVG(
              resolvedTheme === "light" ? "#000" : "#fff"
            );
            copyText(svg);
            toast.success("Copied Logotype as SVG");
          }}
        >
          <TypeIcon />
          Copy Logotype as SVG
        </ContextMenuItem>

        <ContextMenuItem asChild>
          <Link href="/blog/gus-brand">
            <TriangleDashedIcon />
            Brand Guidelines
          </Link>
        </ContextMenuItem>

        <ContextMenuItem asChild>
          <a href="/gus-brand-assets.zip" download>
            <DownloadIcon />
            Download Brand Assets
          </a>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
