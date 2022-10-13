package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePaySchedulePathParams struct {
	EmployerID    string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayScheduleID string `pathParam:"style=simple,explode=false,name=PayScheduleId"`
}

type DeletePayScheduleHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type DeletePayScheduleRequest struct {
	PathParams DeletePaySchedulePathParams
	Headers    DeletePayScheduleHeaders
}

type DeletePayScheduleResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
