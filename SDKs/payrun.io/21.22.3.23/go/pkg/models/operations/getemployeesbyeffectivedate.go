package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetEmployeesByEffectiveDatePathParams struct {
	EffectiveDate time.Time `pathParam:"style=simple,explode=false,name=EffectiveDate"`
	EmployerID    string    `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetEmployeesByEffectiveDateHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetEmployeesByEffectiveDateRequest struct {
	PathParams GetEmployeesByEffectiveDatePathParams
	Headers    GetEmployeesByEffectiveDateHeaders
}

type GetEmployeesByEffectiveDateResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
