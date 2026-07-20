/*
 * @Author: Mecil Meng
 * @Date: 2026-07-19 16:07:49
 * @LastEditors: Mecil Meng
 * @LastEditTime: 2026-07-21 02:23:22
 * @FilePath: /mycode/packages/cli/src/index.tsx
 * @Description:
 *
 * Copyright (c) 2026 by JCBEL/JCBLE/MSCI/MOTU, All Rights Reserved.
 */
import { createCliRenderer, TextAttributes } from "@opentui/core";
import { createRoot } from "@opentui/react";
import { Header } from "./components/header";
import { InputBar } from "./components/input-bar";

function App() {
  return (
    <box
      alignItems="center"
      justifyContent="center"
      backgroundColor="#0D0d12"
      width="100%"
      height="100%"
      gap={2}
    >
      <Header />
      <box width="100%" maxWidth={78} paddingX={2}>
        <InputBar onSubmit={() => {}} />
      </box>
    </box>
  );
}

const renderer = await createCliRenderer({
  targetFps: 60,
  exitOnCtrlC: false,
});
createRoot(renderer).render(<App />);
