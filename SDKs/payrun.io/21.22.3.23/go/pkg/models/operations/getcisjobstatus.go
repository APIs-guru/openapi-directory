package operations

import (
	"openapi/pkg/models/shared"
)

type GetCisJobStatusPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=JobId"`
}

type GetCisJobStatusHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetCisJobStatusRequest struct {
	PathParams GetCisJobStatusPathParams
	Headers    GetCisJobStatusHeaders
}

type GetCisJobStatusResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
