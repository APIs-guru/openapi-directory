package operations

import (
	"openapi/pkg/models/shared"
)

type GetDpsJobStatusPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=JobId"`
}

type GetDpsJobStatusHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetDpsJobStatusRequest struct {
	PathParams GetDpsJobStatusPathParams
	Headers    GetDpsJobStatusHeaders
}

type GetDpsJobStatusResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
