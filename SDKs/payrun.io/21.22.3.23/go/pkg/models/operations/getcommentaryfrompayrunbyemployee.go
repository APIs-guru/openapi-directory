package operations

import (
	"openapi/pkg/models/shared"
)

type GetCommentaryFromPayRunByEmployeePathParams struct {
	EmployeeID    string `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID    string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayRunID      string `pathParam:"style=simple,explode=false,name=PayRunId"`
	PayScheduleID string `pathParam:"style=simple,explode=false,name=PayScheduleId"`
}

type GetCommentaryFromPayRunByEmployeeHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetCommentaryFromPayRunByEmployeeRequest struct {
	PathParams GetCommentaryFromPayRunByEmployeePathParams
	Headers    GetCommentaryFromPayRunByEmployeeHeaders
}

type GetCommentaryFromPayRunByEmployeeResponse struct {
	Commentary  *shared.Commentary
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
