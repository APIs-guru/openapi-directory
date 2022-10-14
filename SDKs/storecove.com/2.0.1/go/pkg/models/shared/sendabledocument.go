package shared

type SendableDocumentDocumentTypeDocumentTypeEnum string

const (
	SendableDocumentDocumentTypeDocumentTypeEnumInvoice         SendableDocumentDocumentTypeDocumentTypeEnum = "invoice"
	SendableDocumentDocumentTypeDocumentTypeEnumInvoiceResponse SendableDocumentDocumentTypeDocumentTypeEnum = "invoice_response"
)

type SendableDocument struct {
	DocumentType    SendableDocumentDocumentTypeDocumentTypeEnum `json:"documentType"`
	Invoice         *Invoice                                     `json:"invoice,omitempty"`
	InvoiceResponse *DocumentInvoiceResponse                     `json:"invoiceResponse,omitempty"`
	RawDocumentData *RawDocumentData                             `json:"rawDocumentData,omitempty"`
}
