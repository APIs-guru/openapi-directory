package shared

type CustomerProfileEnumStatusEnum string

const (
	CustomerProfileEnumStatusEnumDraft          CustomerProfileEnumStatusEnum = "draft"
	CustomerProfileEnumStatusEnumPendingReview  CustomerProfileEnumStatusEnum = "pending-review"
	CustomerProfileEnumStatusEnumInReview       CustomerProfileEnumStatusEnum = "in-review"
	CustomerProfileEnumStatusEnumTwilioRejected CustomerProfileEnumStatusEnum = "twilio-rejected"
	CustomerProfileEnumStatusEnumTwilioApproved CustomerProfileEnumStatusEnum = "twilio-approved"
)
