package operations

import (
	"openapi/pkg/models/shared"
)

type GetCommentariesFromEmployeePathParams struct {
	EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetCommentariesFromEmployeeHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetCommentariesFromEmployeeRequest struct {
	PathParams GetCommentariesFromEmployeePathParams
	Headers    GetCommentariesFromEmployeeHeaders
}

type GetCommentariesFromEmployeeResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
