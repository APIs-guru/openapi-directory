package operations

import (
	"openapi/pkg/models/shared"
)

type CreateInvoiceSubmissionRequest struct {
	Request shared.InvoiceSubmission `request:"mediaType=application/json"`
}

type CreateInvoiceSubmissionResponse struct {
	ContentType             string
	ErrorModels             []interface{}
	InvoiceSubmissionResult *shared.InvoiceSubmissionResult
	StatusCode              int64
}
