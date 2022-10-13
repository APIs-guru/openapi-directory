package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePayInstructionTagPathParams struct {
	EmployeeID       string `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID       string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayInstructionID string `pathParam:"style=simple,explode=false,name=PayInstructionId"`
	TagID            string `pathParam:"style=simple,explode=false,name=TagId"`
}

type DeletePayInstructionTagHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type DeletePayInstructionTagRequest struct {
	PathParams DeletePayInstructionTagPathParams
	Headers    DeletePayInstructionTagHeaders
}

type DeletePayInstructionTagResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
