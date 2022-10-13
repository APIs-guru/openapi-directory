package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDocumentSubmissionRequest struct {
	Request shared.DocumentSubmission `request:"mediaType=application/json"`
}

type CreateDocumentSubmissionResponse struct {
	ContentType              string
	DocumentSubmissionResult *shared.DocumentSubmissionResult
	ErrorModels              []interface{}
	StatusCode               int64
}
