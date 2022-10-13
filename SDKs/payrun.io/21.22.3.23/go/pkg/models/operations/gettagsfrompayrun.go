package operations

import (
	"openapi/pkg/models/shared"
)

type GetTagsFromPayRunPathParams struct {
	EmployerID    string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayRunID      string `pathParam:"style=simple,explode=false,name=PayRunId"`
	PayScheduleID string `pathParam:"style=simple,explode=false,name=PayScheduleId"`
}

type GetTagsFromPayRunHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetTagsFromPayRunRequest struct {
	PathParams GetTagsFromPayRunPathParams
	Headers    GetTagsFromPayRunHeaders
}

type GetTagsFromPayRunResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
