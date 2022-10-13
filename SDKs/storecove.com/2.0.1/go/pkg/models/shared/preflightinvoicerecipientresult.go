package shared

type PreflightInvoiceRecipientResultCodeResultCodeEnum string

const (
	PreflightInvoiceRecipientResultCodeResultCodeEnumOk  PreflightInvoiceRecipientResultCodeResultCodeEnum = "ok"
	PreflightInvoiceRecipientResultCodeResultCodeEnumNok PreflightInvoiceRecipientResultCodeResultCodeEnum = "nok"
)

type PreflightInvoiceRecipientResult struct {
	Code *PreflightInvoiceRecipientResultCodeResultCodeEnum `json:"code"`
}
