package shared

type DocumentInvoiceResponseResponseCodeEnum string

const (
	DocumentInvoiceResponseResponseCodeEnumAb DocumentInvoiceResponseResponseCodeEnum = "AB"
	DocumentInvoiceResponseResponseCodeEnumIP DocumentInvoiceResponseResponseCodeEnum = "IP"
	DocumentInvoiceResponseResponseCodeEnumUq DocumentInvoiceResponseResponseCodeEnum = "UQ"
	DocumentInvoiceResponseResponseCodeEnumRe DocumentInvoiceResponseResponseCodeEnum = "RE"
	DocumentInvoiceResponseResponseCodeEnumAp DocumentInvoiceResponseResponseCodeEnum = "AP"
	DocumentInvoiceResponseResponseCodeEnumPd DocumentInvoiceResponseResponseCodeEnum = "PD"
)

// DocumentInvoiceResponse
// The invoice response to send.
type DocumentInvoiceResponse struct {
	Clarifications []InvoiceResponseClarification          `json:"clarifications,omitempty"`
	EffectiveDate  *string                                 `json:"effectiveDate,omitempty"`
	Note           *string                                 `json:"note,omitempty"`
	ResponseCode   DocumentInvoiceResponseResponseCodeEnum `json:"responseCode"`
}
