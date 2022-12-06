
export enum SegmentEventsMap {
  ASSETS_UPLOADED = 'Asset Manager Asset Uploaded',
  BILLING_ACTION = 'Billing Action Tracked',
  CLASS_CREATED = 'Class Created',
  CLASS_UPDATED = 'Class Updated',
  CMS_ITEM_PUBLISHED = 'CMS Item Published',
  CMS_ITEM_PUBLISH_FAILED = 'CMS Item Publish Failed',
  CHECKOUT_MODAL_OPENED = 'Checkout Modal Opened',
  CHECKOUT_MODAL_CLOSED = 'Checkout Modal Closed',
  CHECKOUT_PAYMENT_BUTTON_PRESSED = 'Checkout Payment Button Pressed',
  DOWNGRADE_PLAN_BUTTON_PRESSED = 'Downgrade Plan Button Pressed',
  ECOMMERCE_MEMBERSHIP_PRODUCT_LIMIT_EXCEEDED =
    'Ecommerce Membership Product Limit Exceeded',
  ECOMMERCE_PRODUCT_CSV_EXPORTED = 'Ecommerce Product CSV Exported',
  EDITOR_OPENED = 'Editor Opened',
  ELEMENT_ADDED = 'Element Added',
  EMAIL_VERIFICATION_COMPLETED = 'Email Verification Completed',
  EMAIL_VERIFICATION_RECAPTCHA_FAILED = 'Email Verification Recaptcha Failed',
  EMAIL_VERIFICATION_RECAPTCHA_SUCCEEDED =
    'Email Verification Recaptcha Succeeded',
  EMAIL_VERIFICATION_SCHEDULED = 'Email Verification Scheduled',
  EMAIL_VERIFICATION_STARTED = 'Email Verification Started',
  ENTERPRISE_PRICING_OVERLAY_DISPLAYED = 'Enterprise Overlay Displayed',
  ENTERPRISE_PRICING_OVERLAY_FORM_DISPLAYED = 'CTA Clicked',
  ENTERPRISE_PRICING_OVERLAY_FORM_SUBMITTED = 'Website Form Submitted',
  FINDER_TRIGGERED = 'Finder Toggled',
  HOSTING_TRANSFERRED = 'Hosting Transferred',
  INVENTORY_SYNC_CSV_REQUESTED = 'Inventory Sync CSV Requested',
  INVOICE_CHARGE_FAILED = 'Invoice Charge Failed',
  INVOICE_PAYMENT_SUCCEEDED = 'Invoice Payment Succeeded',
  LIBRARIES_MARKETPLACE_CTA_CLICKED = 'Marketplace CTA Clicked',
  MEMBER_SUBSCRIPTION_CREATED = 'Member Subscription Created',
  MEMBER_SUBSCRIPTION_CANCELED = 'Member Subscription Canceled',
  NODE_CLICKED = 'Node Clicked',
  ON_CANVAS_SHOW_ALL_OPTIONS_CLICKED = 'On-Canvas Show All Options Clicked',
  ORDER_COMPLETED = 'Order Completed',
  PAYMENT_FAILED = 'Payment Failed',
  PAYMENT_SUCCESS = 'Payment Success',
  PLAN_MODIFIED = 'Plan Modified',
  PLAN_RECOMMENDATION = 'Plan Recommendation',
  PLAN_RECOMMENDATION_CLICKED = 'Plan Recommendation Clicked',
  PLAN_RECOMMENDATION_DISMISSED = 'Plan Recommendation Dismissed',
  PLAN_SEATS_UPDATED = 'Plan Seats Updated',
  PLAN_UPGRADED_BY_BUSINESS = 'Plan Upgraded by Business',
  PLAN_UPGRADED_BY_COMPANY = 'Plan Upgraded by Company',
  PLAN_UPGRADED_BY_SELF = 'Plan Upgraded by Self',
  PLAN_UPGRADED_BY_SP = 'Plan Upgraded by SP',
  PLAN_UPGRADED_FROM_FREE = 'Plan Upgraded from Free',
  PROJECT_CREATED = 'Project Created',
  PROJECT_DELETED = 'Project Deleted',
  PROJECT_PUBLISHED = 'Project Published',
  PROJECT_SHOWCASED = 'Project Showcased',
  PROJECT_TRANSFERRED = 'Project Transferred',
  PROJECT_TRANSFER_RECEIVED = 'Project Transfer Received',
  QUICK_ADD_CTA_CLICKED = 'Quick Add CTA Clicked',
  RENAME_COLLECTION_SLUG = 'Rename Collection Slug',
  SHOWCASE_ACTION_RECEIVED = 'Showcase Action Received',
  SHOWCASE_DIGEST_GENERATED = 'Showcase Digest Generated',
  STRIPE_METHOD = 'Stripe Method Called',
  SITE_TRANSFER_REQUEST_RECEIVED = 'Site Transfer Request Received',
  TAB_PRESSED = 'Tab Pressed',
  TOOLTIP_OPENED = 'Tooltip Opened',
  UNIVERSITY_EXAM_FAILED = 'University Exam Failed',
  UNIVERSITY_EXAM_PASSED = 'University Exam Passed',
  UPGRADED_PLAN = 'Upgraded plan',
  VIDEO_TUTORIAL_PLAYED = 'Video tutorial played',
  VIDEO_TUTORIAL_SELECTED = 'Video tutorial selected',
  VIDEO_TUTORIALS_PANEL_VIEWED = 'Video Tutorials Panel Viewed',
  VIEW_ALL_PLANS_CLICKED = 'View All Plans Clicked',
  VIDEO_TUTORIALS_PLAYER_RESIZED = 'Video Tutorials Player Resized',
  WORKSPACE_BILLING_PAGE_VIEWED = 'Workspace Billing Page Viewed',
  WORKSPACE_INVITATION_ACCEPTED = 'Workspace Invitation Accepted',
  WORKSPACE_INVITATION_CANCELED = 'Workspace Invitation Canceled',
  WORKSPACE_INVITATION_DECLINED = 'Workspace Invitation Declined',
  WORKSPACE_INVITATION_SENT = 'Workspace Invitation Sent',
  WORKSPACE_MIGRATED = 'Workspace Migration completed',
  WORKSPACE_MIGRATION_OPT_IN = 'Workspace Migration opt-in',
  WORKSPACE_MIGRATION_WINDOW_OPENED = 'Workspace Migration window open',
  WORKSPACE_PAGE_PLAN_VIEWED = 'Workspace Plan Page Viewed',
}

export enum SegmentPropertiesMap {
  USER_ID = 'user ID',
  PAGE = 'page',
  SOURCE = 'source',
}

export type MatchesSomeKeysWithValue<K, V> = Partial<{ [key in keyof K]: V }>

// goal: currently, we have a map of event names that will only compile if one of the SegmentPropertiesMap properties is provided
// what we want is to compose this so that *each* event name will then reference the entry below, and look up required and optional properties

export const SegmentEventProperties: MatchesSomeKeysWithValue<typeof SegmentEventsMap, MatchesSomeKeysWithValue<typeof SegmentPropertiesMap, string>> = {
  WORKSPACE_BILLING_PAGE_VIEWED: {
    USER_ID: "qwe456",
    PAGE: 'dashboard',
  },
  WORKSPACE_MIGRATED: {
    USER_ID: 'abc123',
  },
  WORKSPACE_PAGE_PLAN_VIEWED: {
    SOURCE: 'some other',
  }
  
}