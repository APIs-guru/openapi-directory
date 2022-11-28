package shared

type PreflightInvoiceRecipientResultResultCodeEnum string

const (
	PreflightInvoiceRecipientResultResultCodeEnumOk  PreflightInvoiceRecipientResultResultCodeEnum = "ok"
	PreflightInvoiceRecipientResultResultCodeEnumNok PreflightInvoiceRecipientResultResultCodeEnum = "nok"
)

// PreflightInvoiceRecipientResult
// The result of preflighting an invoice recipient
type PreflightInvoiceRecipientResult struct {
	Code *PreflightInvoiceRecipientResultResultCodeEnum `json:"code,omitempty"`
}
