import { SegmentEventsMap, SegmentEventProperties, segmentPropertiesForEvent } from "./maps";

export const telemetry = {
    // basic mock async function; would normally use a real segment call
    // return type handling out of scope of this; we are focused on input params
    sendEvent: (event: any, properties: any) => new Promise(res => setTimeout(res, 100))
}

export const createTrackEvent = async function(
    eventName: keyof typeof SegmentEventsMap,
    props: SegmentEventProperties[typeof eventName] // to check for any valid property -- MatchesSomeKeysWithValue<typeof SegmentPropertiesMap, any>
  ): Promise<unknown> {
    return telemetry.sendEvent(eventName, props);
  }