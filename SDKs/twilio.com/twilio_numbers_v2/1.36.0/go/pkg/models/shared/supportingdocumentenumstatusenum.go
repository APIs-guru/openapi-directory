package shared

type SupportingDocumentEnumStatusEnum string

const (
	SupportingDocumentEnumStatusEnumDraft                 SupportingDocumentEnumStatusEnum = "draft"
	SupportingDocumentEnumStatusEnumPendingReview         SupportingDocumentEnumStatusEnum = "pending-review"
	SupportingDocumentEnumStatusEnumRejected              SupportingDocumentEnumStatusEnum = "rejected"
	SupportingDocumentEnumStatusEnumApproved              SupportingDocumentEnumStatusEnum = "approved"
	SupportingDocumentEnumStatusEnumExpired               SupportingDocumentEnumStatusEnum = "expired"
	SupportingDocumentEnumStatusEnumProvisionallyApproved SupportingDocumentEnumStatusEnum = "provisionally-approved"
)
