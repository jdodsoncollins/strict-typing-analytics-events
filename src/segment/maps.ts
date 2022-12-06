
export enum SegmentEventsMap {
  /* user, account deletion properties, email preferences */
  WORKSPACE_BILLING_PAGE_VIEWED= 'Workspace Billing Page Viewed',
  WORKSPACE_MIGRATED= 'Workspace Migration completed',
  WORKSPACE_PAGE_PLAN_VIEWED= 'Workspace Plan Page Viewed',
}

export enum SegmentPropertiesMap {
  /* user, account deletion properties, email preferences */
  USER_ID = 'user ID',
  TEST = 'abc',
}

export type MatchesSomeKeysWithValue<K, V> = Partial<{ [key in keyof K]: V }>

export const SegmentEventProperties: MatchesSomeKeysWithValue<typeof SegmentEventsMap, MatchesSomeKeysWithValue<typeof SegmentPropertiesMap, string>> = {
  WORKSPACE_BILLING_PAGE_VIEWED: {
    USER_ID: "123"
  },
  WORKSPACE_MIGRATED: {

  },
  WORKSPACE_PAGE_PLAN_VIEWED: {

  }
  
}