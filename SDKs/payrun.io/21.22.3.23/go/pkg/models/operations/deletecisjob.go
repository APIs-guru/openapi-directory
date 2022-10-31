package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCisJobPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=JobId"`
}

type DeleteCisJobHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type DeleteCisJobRequest struct {
	PathParams DeleteCisJobPathParams
	Headers    DeleteCisJobHeaders
}

type DeleteCisJobResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
