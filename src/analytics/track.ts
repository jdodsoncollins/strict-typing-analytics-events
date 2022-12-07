const telemetry = {
  // basic mock async function; would normally use a real segment call
  // return type handling out of scope of this; we are focused on input params
  sendEvent: <K extends keyof EventMap>(eventName: K, props: EventMap[K]) => {
    console.log({ eventName, props });
    return new Promise(res => setTimeout(res, 100)) }
}

interface PersistentProps {
  ref: string;
}

// Define interfaces for the props payload for a given event
interface WorkspacePlanPageViewedEventProps extends PersistentProps {
  workspace_id: string;
}

interface SitePlanPageViewedEventProps extends PersistentProps {
  site_id: string;
}

export interface EventMap {
  "Workspace Plan Page Viewed": WorkspacePlanPageViewedEventProps;
  "Site Plan Page Viewed": SitePlanPageViewedEventProps;
}

export function trackEvent<K extends keyof EventMap>(
  eventName: K,
  props: EventMap[K]
): Promise<unknown> {
  return telemetry.sendEvent(eventName, props);
}