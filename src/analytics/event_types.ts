interface PersistentProps {
    ref: string;
}
  
// Define interfaces for the props payload for a given event
interface WorkspacePlanPageViewedEventProps extends PersistentProps {
    'workspace id': string;
}

interface SitePlanPageViewedEventProps extends PersistentProps {
    'site id': string;
}

export interface EventMap {
    "Workspace Plan Page Viewed": WorkspacePlanPageViewedEventProps;
    "Site Plan Page Viewed": SitePlanPageViewedEventProps;
}