/*
 * @Author: Mecil Meng
 * @Date: 2026-07-19 23:56:53
 * @LastEditors: Mecil Meng
 * @LastEditTime: 2026-07-20 00:16:43
 * @FilePath: /mycode/packages/cli/src/components/header.tsx
 * @Description:
 *
 * Copyright (c) 2026 by JCBEL/JCBLE/MSCI/MOTU, All Rights Reserved.
 */
export function Header() {
  return (
    <box justifyContent="center" alignItems="center">
      <box
        flexDirection="row"
        justifyContent="center"
        gap={0.5}
        alignItems="center"
      >
        <ascii-font font="tiny" text="My" />
        <ascii-font font="tiny" text="Code" />
      </box>
    </box>
  );
}
