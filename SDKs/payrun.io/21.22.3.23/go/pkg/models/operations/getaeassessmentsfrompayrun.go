package operations

import (
	"openapi/pkg/models/shared"
)

type GetAeAssessmentsFromPayRunPathParams struct {
	EmployerID    string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayRunID      string `pathParam:"style=simple,explode=false,name=PayRunId"`
	PayScheduleID string `pathParam:"style=simple,explode=false,name=PayScheduleId"`
}

type GetAeAssessmentsFromPayRunHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetAeAssessmentsFromPayRunRequest struct {
	PathParams GetAeAssessmentsFromPayRunPathParams
	Headers    GetAeAssessmentsFromPayRunHeaders
}

type GetAeAssessmentsFromPayRunResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
