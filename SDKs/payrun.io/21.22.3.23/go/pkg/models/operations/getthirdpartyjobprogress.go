package operations

import (
	"openapi/pkg/models/shared"
)

type GetThirdPartyJobProgressPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=JobId"`
}

type GetThirdPartyJobProgressHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetThirdPartyJobProgressRequest struct {
	PathParams GetThirdPartyJobProgressPathParams
	Headers    GetThirdPartyJobProgressHeaders
}

type GetThirdPartyJobProgressResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
