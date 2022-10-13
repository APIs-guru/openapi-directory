package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetEmployeesFromPayScheduleOnEffectiveDatePathParams struct {
	EffectiveDate time.Time `pathParam:"style=simple,explode=false,name=EffectiveDate"`
	EmployerID    string    `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayScheduleID string    `pathParam:"style=simple,explode=false,name=PayScheduleId"`
}

type GetEmployeesFromPayScheduleOnEffectiveDateHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetEmployeesFromPayScheduleOnEffectiveDateRequest struct {
	PathParams GetEmployeesFromPayScheduleOnEffectiveDatePathParams
	Headers    GetEmployeesFromPayScheduleOnEffectiveDateHeaders
}

type GetEmployeesFromPayScheduleOnEffectiveDateResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
