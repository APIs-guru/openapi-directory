package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePayRunPathParams struct {
	EmployerID    string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayRunID      string `pathParam:"style=simple,explode=false,name=PayRunId"`
	PayScheduleID string `pathParam:"style=simple,explode=false,name=PayScheduleId"`
}

type DeletePayRunHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type DeletePayRunRequest struct {
	PathParams DeletePayRunPathParams
	Headers    DeletePayRunHeaders
}

type DeletePayRunResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
