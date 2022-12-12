
// event objects will not pass typechecking if uppercase characters are present in any property keys, with custom error message 
type lowercaseKeys<K> = keyof K extends Lowercase<string> ? { [P in keyof K]: K[P] } : 'property interface keys should be lowercase'

// For new events, add them to the map
export interface EventMap {
    'Workspace Plan Page Viewed': lowercaseKeys<IWorkspacePlanPageViewedEventProps>;
    'Site Plan Page Viewed': lowercaseKeys<ISitePlanPageViewedEventProps>;
}

// use interface "extends" to set collections of props that are shared across multiple events
interface IPlanUpdateSharedProps {
    'new plan': string,
    'previous plan'?: string
}

// define properties for each event
interface IWorkspacePlanPageViewedEventProps extends IPlanUpdateSharedProps {
    'workspace id': string
}
interface ISitePlanPageViewedEventProps extends IPlanUpdateSharedProps {
    'site id': string
    'workspace id': string
}