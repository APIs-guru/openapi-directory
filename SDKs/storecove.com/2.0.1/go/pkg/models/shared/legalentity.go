package shared

type LegalEntityAdvertisementsDocumentTypeEnum string

const (
	LegalEntityAdvertisementsDocumentTypeEnumInvoice         LegalEntityAdvertisementsDocumentTypeEnum = "invoice"
	LegalEntityAdvertisementsDocumentTypeEnumInvoiceResponse LegalEntityAdvertisementsDocumentTypeEnum = "invoice_response"
)

type LegalEntity struct {
	Advertisements    []LegalEntityAdvertisementsDocumentTypeEnum `json:"advertisements"`
	City              *string                                     `json:"city"`
	Country           *CountryEnum                                `json:"country"`
	County            *string                                     `json:"county"`
	ID                *int64                                      `json:"id"`
	Line1             *string                                     `json:"line1"`
	Line2             *string                                     `json:"line2"`
	PartyName         *string                                     `json:"party_name"`
	PeppolIdentifiers []interface{}                               `json:"peppol_identifiers"`
	Public            *bool                                       `json:"public"`
	TenantID          *string                                     `json:"tenant_id"`
	Zip               *string                                     `json:"zip"`
}
