package shared

type PreflightInvoiceRecipientResultResultCodeEnum string

const (
	PreflightInvoiceRecipientResultResultCodeEnumOk  PreflightInvoiceRecipientResultResultCodeEnum = "ok"
	PreflightInvoiceRecipientResultResultCodeEnumNok PreflightInvoiceRecipientResultResultCodeEnum = "nok"
)

type PreflightInvoiceRecipientResult struct {
	Code *PreflightInvoiceRecipientResultResultCodeEnum `json:"code,omitempty"`
}
