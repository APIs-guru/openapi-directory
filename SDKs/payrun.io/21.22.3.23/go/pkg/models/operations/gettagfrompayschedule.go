package operations

import (
	"openapi/pkg/models/shared"
)

type GetTagFromPaySchedulePathParams struct {
	EmployerID    string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayScheduleID string `pathParam:"style=simple,explode=false,name=PayScheduleId"`
	TagID         string `pathParam:"style=simple,explode=false,name=TagId"`
}

type GetTagFromPayScheduleHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetTagFromPayScheduleRequest struct {
	PathParams GetTagFromPaySchedulePathParams
	Headers    GetTagFromPayScheduleHeaders
}

type GetTagFromPayScheduleResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
	Tag         *shared.Tag
}
