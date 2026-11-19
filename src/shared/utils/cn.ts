import { twMerge } from "tailwind-merge";
import cx, { type ArgumentArray } from "classnames";

export const cn = (...classes: ArgumentArray) => twMerge(cx(classes));
