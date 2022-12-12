import { WorkspaceContextSharedProps, WorkspacePlanModifiedSharedProps, SitePlanUpdateSharedProps, SharedProps } from './sharedProps'

// define properties for each event
export interface WorkspacePlanPageViewedEventProps extends WorkspaceContextSharedProps, WorkspacePlanModifiedSharedProps, SharedProps {}

export interface SitePlanPageViewedEventProps extends SitePlanUpdateSharedProps, SharedProps {
    'workspace id': string
}