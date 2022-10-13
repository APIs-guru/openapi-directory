package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePayInstructionPathParams struct {
	EmployeeID       string `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID       string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayInstructionID string `pathParam:"style=simple,explode=false,name=PayInstructionId"`
}

type DeletePayInstructionHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type DeletePayInstructionRequest struct {
	PathParams DeletePayInstructionPathParams
	Headers    DeletePayInstructionHeaders
}

type DeletePayInstructionResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
