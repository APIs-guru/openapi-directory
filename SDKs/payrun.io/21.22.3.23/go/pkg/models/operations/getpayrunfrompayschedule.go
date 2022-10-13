package operations

import (
	"openapi/pkg/models/shared"
)

type GetPayRunFromPaySchedulePathParams struct {
	EmployerID    string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayRunID      string `pathParam:"style=simple,explode=false,name=PayRunId"`
	PayScheduleID string `pathParam:"style=simple,explode=false,name=PayScheduleId"`
}

type GetPayRunFromPayScheduleHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetPayRunFromPayScheduleRequest struct {
	PathParams GetPayRunFromPaySchedulePathParams
	Headers    GetPayRunFromPayScheduleHeaders
}

type GetPayRunFromPayScheduleResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	PayRun      *shared.PayRun
	StatusCode  int64
}
