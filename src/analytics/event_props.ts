import { WorkspaceContextSharedProps, WorkspacePlanModifiedSharedProps, SitePlanUpdateSharedProps, SharedProps } from './shared_props'

// define properties for each event
export interface WorkspacePlanPageViewedEventProps extends WorkspaceContextSharedProps, WorkspacePlanModifiedSharedProps, SharedProps {}

export interface SitePlanPageViewedEventProps extends Omit<SitePlanUpdateSharedProps, 'new plan'>, SharedProps {
    'tab selected': string,
}