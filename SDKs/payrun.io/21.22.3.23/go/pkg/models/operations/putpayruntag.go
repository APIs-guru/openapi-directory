package operations

import (
	"openapi/pkg/models/shared"
)

type PutPayRunTagPathParams struct {
	EmployerID    string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayRunID      string `pathParam:"style=simple,explode=false,name=PayRunId"`
	PayScheduleID string `pathParam:"style=simple,explode=false,name=PayScheduleId"`
	TagID         string `pathParam:"style=simple,explode=false,name=TagId"`
}

type PutPayRunTagHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type PutPayRunTagRequest struct {
	PathParams PutPayRunTagPathParams
	Headers    PutPayRunTagHeaders
}

type PutPayRunTagResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
	Tag         *shared.Tag
}
