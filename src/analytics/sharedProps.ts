/**
 * In this file we defined analytics events properties that are shared across all, or some events.
 * Use interface "extends" to set collections of props that are shared across a given event,
 */

// Types definitions
export type SitePlanType = "starter" | "basic" | "cms";
export type WorkspacePlanType =
  | "starter"
  | "growth"
  | "freelancer"
  | "agency"
  | "core"
  | "enterprise";

// Shared props that all of the events must include
export interface SharedProps {
  ref?: string | null;
}

// Context props
export interface WorkspaceContextSharedProps {
  "workspace id": string;
  "workspace is enterprise": boolean;
  "workspace plan type": WorkspacePlanType;
  "workspace slug": string;
  "workspace seat count": number;
}

// Specific events shared props
export interface WorkspacePlanModifiedSharedProps {
  "initial plan level"?: string;
  "initial plan frequency"?: "month" | "year";
  "new plan level"?: string;
  "new plan frequency"?: "month" | "year";
  "workspace initial number of seats": number;
  "workspace new number of seats": number;
  "value of new plan"?: number;
  "charged amount"?: number;
  "promotion applied"?: boolean;
  "promotion value"?: number;
}

export interface SitePlanUpdateSharedProps {
  "site id": string;
  "new plan": SitePlanType;
  "previous plan"?: string;
}
