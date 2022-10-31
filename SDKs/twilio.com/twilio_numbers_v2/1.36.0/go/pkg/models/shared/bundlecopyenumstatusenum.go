package shared




type BundleCopyEnumStatusEnum string

const (
    BundleCopyEnumStatusEnumDraft BundleCopyEnumStatusEnum = "draft"
BundleCopyEnumStatusEnumPendingReview BundleCopyEnumStatusEnum = "pending-review"
BundleCopyEnumStatusEnumInReview BundleCopyEnumStatusEnum = "in-review"
BundleCopyEnumStatusEnumTwilioRejected BundleCopyEnumStatusEnum = "twilio-rejected"
BundleCopyEnumStatusEnumTwilioApproved BundleCopyEnumStatusEnum = "twilio-approved"
BundleCopyEnumStatusEnumProvisionallyApproved BundleCopyEnumStatusEnum = "provisionally-approved"
)


