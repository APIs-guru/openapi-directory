package shared

type DocumentInvoiceResponseResponseCodeResponseCodeEnum string

const (
	DocumentInvoiceResponseResponseCodeResponseCodeEnumAb DocumentInvoiceResponseResponseCodeResponseCodeEnum = "AB"
	DocumentInvoiceResponseResponseCodeResponseCodeEnumIP DocumentInvoiceResponseResponseCodeResponseCodeEnum = "IP"
	DocumentInvoiceResponseResponseCodeResponseCodeEnumUq DocumentInvoiceResponseResponseCodeResponseCodeEnum = "UQ"
	DocumentInvoiceResponseResponseCodeResponseCodeEnumRe DocumentInvoiceResponseResponseCodeResponseCodeEnum = "RE"
	DocumentInvoiceResponseResponseCodeResponseCodeEnumAp DocumentInvoiceResponseResponseCodeResponseCodeEnum = "AP"
	DocumentInvoiceResponseResponseCodeResponseCodeEnumPd DocumentInvoiceResponseResponseCodeResponseCodeEnum = "PD"
)

type DocumentInvoiceResponse struct {
	Clarifications []InvoiceResponseClarification                      `json:"clarifications,omitempty"`
	EffectiveDate  *string                                             `json:"effectiveDate,omitempty"`
	Note           *string                                             `json:"note,omitempty"`
	ResponseCode   DocumentInvoiceResponseResponseCodeResponseCodeEnum `json:"responseCode"`
}
