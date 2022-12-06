import { SegmentPropertiesMap, SegmentEventsMap } from "./maps";
import { MapValueType } from "./types";

export const telemetry = {
    sendEvent: (event: any, properties: any) => new Promise(res => setTimeout(res, 100))
}

export const createTrackEvent = async function(
    event: keyof typeof SegmentEventsMap,
    props: Partial<{ [key in keyof typeof SegmentPropertiesMap]: any }> = {},
  ): Promise<unknown> {
    return telemetry.sendEvent(event, props);
  }