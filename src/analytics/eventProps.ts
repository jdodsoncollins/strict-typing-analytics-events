/**
 * In this file we defined analytics events properties that are part of a given event.
 * All analytics events should have its correspondent properties definition.
 */

import * as Props from "./sharedProps";

// Define the event properties for each event

// Workspace events
export interface WorkspacePlanPageViewedEventProps
  extends Props.WorkspaceContextSharedProps,
    Props.SharedProps {}

// Site events
export interface SitePlanPageViewedEventProps
  extends Props.SiteContextSharedProps,
    Props.SharedProps {}

// General events
export interface PlanModifiedEventProps
  extends Props.PlanModifiedSharedProps,
    Props.SharedProps {}
