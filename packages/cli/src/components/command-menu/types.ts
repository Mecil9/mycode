/*
 * @Author: Mecil Meng
 * @Date: 2026-07-20 23:03:54
 * @LastEditors: Mecil Meng
 * @LastEditTime: 2026-07-20 23:07:18
 * @FilePath: /mycode/packages/cli/src/components/command-menu/types.ts
 * @Description:
 *
 * Copyright (c) 2026 by JCBEL/JCBLE/MSCI/MOTU, All Rights Reserved.
 */
export type CommandContext = {
  exit: () => void;
};

export type Command = {
  name: string;
  description: string;
  value: string;
  action?: (ctx: CommandContext) => void | Promise<void>;
};
