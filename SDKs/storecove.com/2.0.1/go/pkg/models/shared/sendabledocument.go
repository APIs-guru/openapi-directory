package shared

type SendableDocumentDocumentTypeEnum string

const (
	SendableDocumentDocumentTypeEnumInvoice         SendableDocumentDocumentTypeEnum = "invoice"
	SendableDocumentDocumentTypeEnumInvoiceResponse SendableDocumentDocumentTypeEnum = "invoice_response"
)

type SendableDocument struct {
	DocumentType    SendableDocumentDocumentTypeEnum `json:"documentType"`
	Invoice         *Invoice                         `json:"invoice,omitempty"`
	InvoiceResponse *DocumentInvoiceResponse         `json:"invoiceResponse,omitempty"`
	RawDocumentData *RawDocumentData                 `json:"rawDocumentData,omitempty"`
}
