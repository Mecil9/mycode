/*
 * @Author: Mecil Meng
 * @Date: 2026-07-20 00:02:38
 * @LastEditors: Mecil Meng
 * @LastEditTime: 2026-07-20 00:02:59
 * @FilePath: /mycode/packages/cli/src/components/status-bar.tsx
 * @Description:
 *
 * Copyright (c) 2026 by JCBEL/JCBLE/MSCI/MOTU, All Rights Reserved.
 */
import { TextAttributes } from "@opentui/core";

export function StatusBar() {
  return (
    <box flexDirection="row" gap={1}>
      <text fg="cyan">Build</text>
      <text attributes={TextAttributes.DIM} fg="gray">
        &#8250; 0 errors, 0 warnings
      </text>
      <text>opus-4-6</text>
    </box>
  );
}
