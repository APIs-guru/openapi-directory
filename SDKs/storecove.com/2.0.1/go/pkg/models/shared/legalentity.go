package shared

type LegalEntityDocumentTypeEnum string

const (
	LegalEntityDocumentTypeEnumInvoice         LegalEntityDocumentTypeEnum = "invoice"
	LegalEntityDocumentTypeEnumInvoiceResponse LegalEntityDocumentTypeEnum = "invoice_response"
)

type LegalEntity struct {
	Advertisements    []LegalEntityDocumentTypeEnum `json:"advertisements,omitempty"`
	City              *string                       `json:"city,omitempty"`
	Country           *CountryEnum                  `json:"country,omitempty"`
	County            *string                       `json:"county,omitempty"`
	ID                *int64                        `json:"id,omitempty"`
	Line1             *string                       `json:"line1,omitempty"`
	Line2             *string                       `json:"line2,omitempty"`
	PartyName         *string                       `json:"party_name,omitempty"`
	PeppolIdentifiers []interface{}                 `json:"peppol_identifiers,omitempty"`
	Public            *bool                         `json:"public,omitempty"`
	TenantID          *string                       `json:"tenant_id,omitempty"`
	Zip               *string                       `json:"zip,omitempty"`
}
