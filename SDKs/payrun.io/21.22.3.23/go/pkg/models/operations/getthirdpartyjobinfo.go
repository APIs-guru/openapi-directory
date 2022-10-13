package operations

import (
	"openapi/pkg/models/shared"
)

type GetThirdPartyJobInfoPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=JobId"`
}

type GetThirdPartyJobInfoHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetThirdPartyJobInfoRequest struct {
	PathParams GetThirdPartyJobInfoPathParams
	Headers    GetThirdPartyJobInfoHeaders
}

type GetThirdPartyJobInfoResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	JobInfo     *shared.JobInfo
	StatusCode  int64
}
