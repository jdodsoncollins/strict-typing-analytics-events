import { EventMap } from "./event_types";

type EventMapWithPersistentProps<T extends keyof EventMap> = EventMap[T] & {
  // add properties here that we'd like to automatically add
  ref?: string | null
}

const addPersistentProps = <K extends keyof EventMap>(props: EventMapWithPersistentProps<K>): EventMap[K] | EventMapWithPersistentProps<K> => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
  if (!Object.keys(props).includes('ref') && urlParams.get('ref')) {
    // if a call wants to override `ref` with a value of `null`, we want to respect that
    props.ref = urlParams.get('ref')
  }
  return props
}

const telemetry = {
  // mock call
  // includes example of adding some props automatiacally if present in URL
  sendEvent: <K extends keyof EventMap>(eventName: K, props: EventMap[K]) => {
    const propsWithPersistent = addPersistentProps(props) // if the persistent props function is not wanted, discard addPersistentProps(...) usage
    console.log({ eventName, propsWithPersistent });
    return new Promise(res => setTimeout(res, 100)) 
  }
}

export function trackEvent<K extends keyof EventMap>(
  eventName: K,
  props: EventMap[K]
): Promise<unknown> {
  return telemetry.sendEvent(eventName, props);
}