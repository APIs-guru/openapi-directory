package operations

import (
	"openapi/pkg/models/shared"
)

type GetRtiJobStatusPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=JobId"`
}

type GetRtiJobStatusHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetRtiJobStatusRequest struct {
	PathParams GetRtiJobStatusPathParams
	Headers    GetRtiJobStatusHeaders
}

type GetRtiJobStatusResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
