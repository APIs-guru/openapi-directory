package operations

import (
	"openapi/pkg/models/shared"
)

type PutPaySchedulePathParams struct {
	EmployerID    string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayScheduleID string `pathParam:"style=simple,explode=false,name=PayScheduleId"`
}

type PutPayScheduleHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type PutPayScheduleRequest struct {
	PathParams PutPaySchedulePathParams
	Headers    PutPayScheduleHeaders
	Request    shared.PaySchedule `request:"mediaType=application/json"`
}

type PutPayScheduleResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	PaySchedule *shared.PaySchedule
	StatusCode  int64
}
