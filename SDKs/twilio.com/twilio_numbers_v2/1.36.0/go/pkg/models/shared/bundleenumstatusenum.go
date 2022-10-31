package shared




type BundleEnumStatusEnum string

const (
    BundleEnumStatusEnumDraft BundleEnumStatusEnum = "draft"
BundleEnumStatusEnumPendingReview BundleEnumStatusEnum = "pending-review"
BundleEnumStatusEnumInReview BundleEnumStatusEnum = "in-review"
BundleEnumStatusEnumTwilioRejected BundleEnumStatusEnum = "twilio-rejected"
BundleEnumStatusEnumTwilioApproved BundleEnumStatusEnum = "twilio-approved"
BundleEnumStatusEnumProvisionallyApproved BundleEnumStatusEnum = "provisionally-approved"
)


