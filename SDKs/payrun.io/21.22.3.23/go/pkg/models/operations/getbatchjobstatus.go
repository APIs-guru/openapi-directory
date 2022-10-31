package operations

import (
	"openapi/pkg/models/shared"
)

type GetBatchJobStatusPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=JobId"`
}

type GetBatchJobStatusHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetBatchJobStatusRequest struct {
	PathParams GetBatchJobStatusPathParams
	Headers    GetBatchJobStatusHeaders
}

type GetBatchJobStatusResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
