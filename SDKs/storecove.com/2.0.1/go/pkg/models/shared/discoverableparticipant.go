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

// DiscoverableParticipant
// A participant to be discovered.
type DiscoverableParticipant struct {
	DocumentTypes []DiscoverableParticipantDocumentTypesEnum `json:"documentTypes,omitempty"`
	Identifier    string                                     `json:"identifier"`
	MetaScheme    *string                                    `json:"metaScheme,omitempty"`
	Network       *string                                    `json:"network,omitempty"`
	Scheme        string                                     `json:"scheme"`
}
