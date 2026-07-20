/*
 * @Author: Mecil Meng
 * @Date: 2026-07-20 23:10:52
 * @LastEditors: Mecil Meng
 * @LastEditTime: 2026-07-20 23:12:05
 * @FilePath: /mycode/packages/cli/src/components/command-menu/filter-commands.ts
 * @Description:
 *
 * Copyright (c) 2026 by JCBEL/JCBLE/MSCI/MOTU, All Rights Reserved.
 */
import type { Command } from "./types";
import { COMMANDS } from "./commands";

export function getFilteredCommands(query: string): Command[] {
  if (query.length === 0) return COMMANDS;
  return COMMANDS.filter((cmd) =>
    cmd.name.toLowerCase().startsWith(query.toLowerCase()),
  );
}
