package operations

import (
	"openapi/pkg/models/shared"
)

type GetEmployeesFromPayRunPathParams struct {
	EmployerID    string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayRunID      string `pathParam:"style=simple,explode=false,name=PayRunId"`
	PayScheduleID string `pathParam:"style=simple,explode=false,name=PayScheduleId"`
}

type GetEmployeesFromPayRunHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetEmployeesFromPayRunRequest struct {
	PathParams GetEmployeesFromPayRunPathParams
	Headers    GetEmployeesFromPayRunHeaders
}

type GetEmployeesFromPayRunResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
