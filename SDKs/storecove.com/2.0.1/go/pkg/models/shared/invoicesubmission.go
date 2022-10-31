package shared




type InvoiceSubmissionModeEnum string

const (
    InvoiceSubmissionModeEnumDirect InvoiceSubmissionModeEnum = "direct"
)


type InvoiceSubmission struct {
    Attachments []Attachment `json:"attachments,omitempty"`
    CreatePrimaryImage *bool `json:"createPrimaryImage,omitempty"`
    Document *string `json:"document,omitempty"`
    DocumentURL *string `json:"documentUrl,omitempty"`
    IdempotencyGUID *string `json:"idempotencyGuid,omitempty"`
    Invoice *Invoice `json:"invoice,omitempty"`
    InvoiceData *InvoiceData `json:"invoiceData,omitempty"`
    InvoiceRecipient *InvoiceRecipient `json:"invoiceRecipient,omitempty"`
    LegalEntityID *int64 `json:"legalEntityId,omitempty"`
    LegalSupplierID *int64 `json:"legalSupplierId,omitempty"`
    Mode *InvoiceSubmissionModeEnum `json:"mode,omitempty"`
    Routing *Routing `json:"routing,omitempty"`
    SupplierID *int64 `json:"supplierId,omitempty"`
    
}

