import type { CfModuleType } from "./worker";

/**
 * Compute the entry-point type from the bundle format.
 */
export function getBundleType(format: string): CfModuleType {
	return format === "modules" ? "esm" : "commonjs";
}
