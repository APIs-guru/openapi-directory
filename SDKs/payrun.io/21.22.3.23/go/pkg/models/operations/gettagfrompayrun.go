package operations

import (
	"openapi/pkg/models/shared"
)

type GetTagFromPayRunPathParams struct {
	EmployerID    string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayRunID      string `pathParam:"style=simple,explode=false,name=PayRunId"`
	PayScheduleID string `pathParam:"style=simple,explode=false,name=PayScheduleId"`
	TagID         string `pathParam:"style=simple,explode=false,name=TagId"`
}

type GetTagFromPayRunHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetTagFromPayRunRequest struct {
	PathParams GetTagFromPayRunPathParams
	Headers    GetTagFromPayRunHeaders
}

type GetTagFromPayRunResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
	Tag         *shared.Tag
}
