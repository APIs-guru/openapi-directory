package shared

type DiscoverableParticipantDocumentTypesEnum string

const (
	DiscoverableParticipantDocumentTypesEnumInvoice              DiscoverableParticipantDocumentTypesEnum = "invoice"
	DiscoverableParticipantDocumentTypesEnumCreditnote           DiscoverableParticipantDocumentTypesEnum = "creditnote"
	DiscoverableParticipantDocumentTypesEnumInvoiceResponse      DiscoverableParticipantDocumentTypesEnum = "invoice_response"
	DiscoverableParticipantDocumentTypesEnumOrder                DiscoverableParticipantDocumentTypesEnum = "order"
	DiscoverableParticipantDocumentTypesEnumOrderResponse        DiscoverableParticipantDocumentTypesEnum = "order_response"
	DiscoverableParticipantDocumentTypesEnumDespatchNotification DiscoverableParticipantDocumentTypesEnum = "despatch_notification"
	DiscoverableParticipantDocumentTypesEnumProductCatalogue     DiscoverableParticipantDocumentTypesEnum = "product_catalogue"
)

type DiscoverableParticipant struct {
	DocumentTypes []DiscoverableParticipantDocumentTypesEnum `json:"documentTypes"`
	Identifier    string                                     `json:"identifier"`
	MetaScheme    *string                                    `json:"metaScheme"`
	Network       *string                                    `json:"network"`
	Scheme        string                                     `json:"scheme"`
}
