import { EventMap } from "./event_types";

const telemetry = {
  // basic mock async function; would normally use a real segment call
  // return type handling out of scope of this; we are focused on input params
  sendEvent: <K extends keyof EventMap>(eventName: K, props: EventMap[K]) => {
    console.log({ eventName, props });
    return new Promise(res => setTimeout(res, 100)) }
}

export function trackEvent<K extends keyof EventMap>(
  eventName: K,
  props: EventMap[K]
): Promise<unknown> {
  return telemetry.sendEvent(eventName, props);
}