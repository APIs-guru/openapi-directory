package operations

import (
	"openapi/pkg/models/shared"
)

type GetThirdPartyJobStatusPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=JobId"`
}

type GetThirdPartyJobStatusHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetThirdPartyJobStatusRequest struct {
	PathParams GetThirdPartyJobStatusPathParams
	Headers    GetThirdPartyJobStatusHeaders
}

type GetThirdPartyJobStatusResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
