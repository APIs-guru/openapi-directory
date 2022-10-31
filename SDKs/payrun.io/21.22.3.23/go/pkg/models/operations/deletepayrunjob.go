package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePayRunJobPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=JobId"`
}

type DeletePayRunJobHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type DeletePayRunJobRequest struct {
	PathParams DeletePayRunJobPathParams
	Headers    DeletePayRunJobHeaders
}

type DeletePayRunJobResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
