package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRtiJobPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=JobId"`
}

type DeleteRtiJobHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type DeleteRtiJobRequest struct {
	PathParams DeleteRtiJobPathParams
	Headers    DeleteRtiJobHeaders
}

type DeleteRtiJobResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
