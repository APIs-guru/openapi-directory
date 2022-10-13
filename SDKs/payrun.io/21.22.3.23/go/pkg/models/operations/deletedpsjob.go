package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDpsJobPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=JobId"`
}

type DeleteDpsJobHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type DeleteDpsJobRequest struct {
	PathParams DeleteDpsJobPathParams
	Headers    DeleteDpsJobHeaders
}

type DeleteDpsJobResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
