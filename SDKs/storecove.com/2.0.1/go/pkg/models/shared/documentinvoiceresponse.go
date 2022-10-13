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
	Clarifications []InvoiceResponseClarification                      `json:"clarifications"`
	EffectiveDate  *string                                             `json:"effectiveDate"`
	Note           *string                                             `json:"note"`
	ResponseCode   DocumentInvoiceResponseResponseCodeResponseCodeEnum `json:"responseCode"`
}
