import { SegmentPropertiesMap, SegmentEventsMap, MatchesSomeKeysWithValue } from "./maps";
import { MapValueType } from "./types";

export const telemetry = {
    sendEvent: (event: any, properties: any) => new Promise(res => setTimeout(res, 100))
}

export const createTrackEvent = async function(
    event: keyof typeof SegmentEventsMap,
    props: MatchesSomeKeysWithValue<typeof SegmentPropertiesMap, any>
  ): Promise<unknown> {
    return telemetry.sendEvent(event, props);
  }