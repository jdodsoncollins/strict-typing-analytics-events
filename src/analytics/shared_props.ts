export interface SharedProps {
    'ref'?: string | null
}

export type SitePlanType = 'starter' | 'basic' | 'cms'
export type WorkspacePlanType = 'starter' | 'growth' | 'freelancer' | 'agency' | 'core' | 'enterprise'

// use interface "extends" to set collections of props that are shared across multiple events
export interface SitePlanUpdateSharedProps {
    'site id': string
    'new plan': SitePlanType,
    'previous plan'?: string
}

export interface WorkspaceContextSharedProps {
    'workspace id': string,
    'workspace is enterprise': boolean,
    'workspace plan type': WorkspacePlanType,
    'workspace slug': string,
    'workspace seat count': number,
}

export interface WorkspacePlanModifiedSharedProps {
    'initial plan level'?: string,
    'initial plan frequency'?:  'month' | 'year',
    'new plan level'?: string,
    'new plan frequency'?: 'month' | 'year',
    'workspace initial number of seats': number,
    'workspace new number of seats': number,
    'value of new plan'?: number,
    'charged amount'?: number,
    'promotion applied'?: boolean,
    'promotion value'?: number,
}