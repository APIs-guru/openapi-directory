package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetEmployeeByEffectiveDatePathParams struct {
	EffectiveDate time.Time `pathParam:"style=simple,explode=false,name=EffectiveDate"`
	EmployeeID    string    `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID    string    `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetEmployeeByEffectiveDateHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetEmployeeByEffectiveDateRequest struct {
	PathParams GetEmployeeByEffectiveDatePathParams
	Headers    GetEmployeeByEffectiveDateHeaders
}

type GetEmployeeByEffectiveDateResponse struct {
	ContentType string
	Employee    *shared.Employee
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
