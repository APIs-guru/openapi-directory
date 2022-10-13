package operations

import (
	"openapi/pkg/models/shared"
)

type GetDpsJobInfoPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=JobId"`
}

type GetDpsJobInfoHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetDpsJobInfoRequest struct {
	PathParams GetDpsJobInfoPathParams
	Headers    GetDpsJobInfoHeaders
}

type GetDpsJobInfoResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	JobInfo     *shared.JobInfo
	StatusCode  int64
}
