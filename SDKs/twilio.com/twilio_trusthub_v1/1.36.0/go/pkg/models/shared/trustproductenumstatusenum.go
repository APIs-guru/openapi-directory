package shared

type TrustProductEnumStatusEnum string

const (
	TrustProductEnumStatusEnumDraft          TrustProductEnumStatusEnum = "draft"
	TrustProductEnumStatusEnumPendingReview  TrustProductEnumStatusEnum = "pending-review"
	TrustProductEnumStatusEnumInReview       TrustProductEnumStatusEnum = "in-review"
	TrustProductEnumStatusEnumTwilioRejected TrustProductEnumStatusEnum = "twilio-rejected"
	TrustProductEnumStatusEnumTwilioApproved TrustProductEnumStatusEnum = "twilio-approved"
)
