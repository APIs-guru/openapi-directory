package shared

type ReplaceItemsEnumStatusEnum string

const (
	ReplaceItemsEnumStatusEnumDraft                 ReplaceItemsEnumStatusEnum = "draft"
	ReplaceItemsEnumStatusEnumPendingReview         ReplaceItemsEnumStatusEnum = "pending-review"
	ReplaceItemsEnumStatusEnumInReview              ReplaceItemsEnumStatusEnum = "in-review"
	ReplaceItemsEnumStatusEnumTwilioRejected        ReplaceItemsEnumStatusEnum = "twilio-rejected"
	ReplaceItemsEnumStatusEnumTwilioApproved        ReplaceItemsEnumStatusEnum = "twilio-approved"
	ReplaceItemsEnumStatusEnumProvisionallyApproved ReplaceItemsEnumStatusEnum = "provisionally-approved"
)
