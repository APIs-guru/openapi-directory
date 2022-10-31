package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePayScheduleTagPathParams struct {
	EmployerID    string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayScheduleID string `pathParam:"style=simple,explode=false,name=PayScheduleId"`
	TagID         string `pathParam:"style=simple,explode=false,name=TagId"`
}

type DeletePayScheduleTagHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type DeletePayScheduleTagRequest struct {
	PathParams DeletePayScheduleTagPathParams
	Headers    DeletePayScheduleTagHeaders
}

type DeletePayScheduleTagResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
