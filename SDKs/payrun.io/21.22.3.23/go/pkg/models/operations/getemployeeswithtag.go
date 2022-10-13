package operations

import (
	"openapi/pkg/models/shared"
)

type GetEmployeesWithTagPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
	TagID      string `pathParam:"style=simple,explode=false,name=TagId"`
}

type GetEmployeesWithTagHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetEmployeesWithTagRequest struct {
	PathParams GetEmployeesWithTagPathParams
	Headers    GetEmployeesWithTagHeaders
}

type GetEmployeesWithTagResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
