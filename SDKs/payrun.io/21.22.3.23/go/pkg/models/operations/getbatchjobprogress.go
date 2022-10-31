package operations

import (
	"openapi/pkg/models/shared"
)

type GetBatchJobProgressPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=JobId"`
}

type GetBatchJobProgressHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetBatchJobProgressRequest struct {
	PathParams GetBatchJobProgressPathParams
	Headers    GetBatchJobProgressHeaders
}

type GetBatchJobProgressResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
