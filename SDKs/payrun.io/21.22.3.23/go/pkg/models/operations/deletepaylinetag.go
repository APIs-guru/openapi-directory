package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePayLineTagPathParams struct {
	EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayLineID  string `pathParam:"style=simple,explode=false,name=PayLineId"`
	TagID      string `pathParam:"style=simple,explode=false,name=TagId"`
}

type DeletePayLineTagHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type DeletePayLineTagRequest struct {
	PathParams DeletePayLineTagPathParams
	Headers    DeletePayLineTagHeaders
}

type DeletePayLineTagResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
