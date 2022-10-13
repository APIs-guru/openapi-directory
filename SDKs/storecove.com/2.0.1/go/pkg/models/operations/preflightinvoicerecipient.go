package operations

import (
	"openapi/pkg/models/shared"
)

type PreflightInvoiceRecipientRequest struct {
	Request shared.InvoiceRecipientPreflight `request:"mediaType=application/json"`
}

type PreflightInvoiceRecipientResponse struct {
	ContentType                     string
	ErrorModels                     []interface{}
	PreflightInvoiceRecipientResult *shared.PreflightInvoiceRecipientResult
	StatusCode                      int64
}
