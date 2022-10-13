package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePayRunTagPathParams struct {
	EmployerID    string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayRunID      string `pathParam:"style=simple,explode=false,name=PayRunId"`
	PayScheduleID string `pathParam:"style=simple,explode=false,name=PayScheduleId"`
	TagID         string `pathParam:"style=simple,explode=false,name=TagId"`
}

type DeletePayRunTagHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type DeletePayRunTagRequest struct {
	PathParams DeletePayRunTagPathParams
	Headers    DeletePayRunTagHeaders
}

type DeletePayRunTagResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
