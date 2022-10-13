package shared

type InvoiceSubmissionModeModeEnum string

const (
	InvoiceSubmissionModeModeEnumDirect InvoiceSubmissionModeModeEnum = "direct"
)

type InvoiceSubmission struct {
	Attachments        []Attachment                   `json:"attachments"`
	CreatePrimaryImage *bool                          `json:"createPrimaryImage"`
	Document           *string                        `json:"document"`
	DocumentURL        *string                        `json:"documentUrl"`
	IdempotencyGUID    *string                        `json:"idempotencyGuid"`
	Invoice            *Invoice                       `json:"invoice"`
	InvoiceData        *InvoiceData                   `json:"invoiceData"`
	InvoiceRecipient   *InvoiceRecipient              `json:"invoiceRecipient"`
	LegalEntityID      *int64                         `json:"legalEntityId"`
	LegalSupplierID    *int64                         `json:"legalSupplierId"`
	Mode               *InvoiceSubmissionModeModeEnum `json:"mode"`
	Routing            *Routing                       `json:"routing"`
	SupplierID         *int64                         `json:"supplierId"`
}
