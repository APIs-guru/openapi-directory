package operations

import (
	"openapi/pkg/models/shared"
)

type GetPayRunJobStatusPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=JobId"`
}

type GetPayRunJobStatusHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetPayRunJobStatusRequest struct {
	PathParams GetPayRunJobStatusPathParams
	Headers    GetPayRunJobStatusHeaders
}

type GetPayRunJobStatusResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
