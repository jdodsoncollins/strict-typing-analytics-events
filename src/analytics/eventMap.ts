/**
 * In this file we defined a map of analytics events names:properties that are sent to our analytics provider.
 */

import * as Props from "./eventProps";

// Event objects will not pass typechecking if uppercase characters are present in any property keys, with custom error message
type lowercaseKeys<K> = keyof K extends Lowercase<string>
  ? { [P in keyof K]: K[P] }
  : "property interface keys should be lowercase";

// For new events, add them to the map
export interface EventMap {
  "Workspace Plan Page Viewed": lowercaseKeys<Props.WorkspacePlanPageViewedEventProps>;
  "Site Plan Page Viewed": lowercaseKeys<Props.SitePlanPageViewedEventProps>;
  "Plan Modified": lowercaseKeys<Props.PlanModifiedEventProps>;
}
