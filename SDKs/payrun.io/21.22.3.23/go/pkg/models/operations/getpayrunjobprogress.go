package operations

import (
	"openapi/pkg/models/shared"
)

type GetPayRunJobProgressPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=JobId"`
}

type GetPayRunJobProgressHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetPayRunJobProgressRequest struct {
	PathParams GetPayRunJobProgressPathParams
	Headers    GetPayRunJobProgressHeaders
}

type GetPayRunJobProgressResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
