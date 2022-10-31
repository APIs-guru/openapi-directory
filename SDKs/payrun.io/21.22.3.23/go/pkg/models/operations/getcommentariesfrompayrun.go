package operations

import (
	"openapi/pkg/models/shared"
)

type GetCommentariesFromPayRunPathParams struct {
	EmployerID    string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayRunID      string `pathParam:"style=simple,explode=false,name=PayRunId"`
	PayScheduleID string `pathParam:"style=simple,explode=false,name=PayScheduleId"`
}

type GetCommentariesFromPayRunHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetCommentariesFromPayRunRequest struct {
	PathParams GetCommentariesFromPayRunPathParams
	Headers    GetCommentariesFromPayRunHeaders
}

type GetCommentariesFromPayRunResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
