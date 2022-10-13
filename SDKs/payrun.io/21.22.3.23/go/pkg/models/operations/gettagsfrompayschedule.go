package operations

import (
	"openapi/pkg/models/shared"
)

type GetTagsFromPaySchedulePathParams struct {
	EmployerID    string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayScheduleID string `pathParam:"style=simple,explode=false,name=PayScheduleId"`
}

type GetTagsFromPayScheduleHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetTagsFromPayScheduleRequest struct {
	PathParams GetTagsFromPaySchedulePathParams
	Headers    GetTagsFromPayScheduleHeaders
}

type GetTagsFromPayScheduleResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
