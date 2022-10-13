package operations

import (
	"openapi/pkg/models/shared"
)

type GetCisJobProgressPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=JobId"`
}

type GetCisJobProgressHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetCisJobProgressRequest struct {
	PathParams GetCisJobProgressPathParams
	Headers    GetCisJobProgressHeaders
}

type GetCisJobProgressResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
