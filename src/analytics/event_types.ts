type plans = 'starter' | 'static' | 'cms' | 'business'

interface PlanUpdateSharedProps {
    'new plan': plans;
}
  
interface WorkspacePlanPageViewedEventProps extends PlanUpdateSharedProps {
    'workspace id': string;
}

interface SitePlanPageViewedEventProps extends PlanUpdateSharedProps {
    'site id': string;
}

export interface EventMap {
    "Workspace Plan Page Viewed": WorkspacePlanPageViewedEventProps;
    "Site Plan Page Viewed": SitePlanPageViewedEventProps;
}