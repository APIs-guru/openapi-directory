package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteEmployeeTagPathParams struct {
	EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
	TagID      string `pathParam:"style=simple,explode=false,name=TagId"`
}

type DeleteEmployeeTagHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type DeleteEmployeeTagRequest struct {
	PathParams DeleteEmployeeTagPathParams
	Headers    DeleteEmployeeTagHeaders
}

type DeleteEmployeeTagResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
