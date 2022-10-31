package operations

import (
	"openapi/pkg/models/shared"
)

type GetTagsFromEmployeePathParams struct {
	EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetTagsFromEmployeeHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetTagsFromEmployeeRequest struct {
	PathParams GetTagsFromEmployeePathParams
	Headers    GetTagsFromEmployeeHeaders
}

type GetTagsFromEmployeeResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
