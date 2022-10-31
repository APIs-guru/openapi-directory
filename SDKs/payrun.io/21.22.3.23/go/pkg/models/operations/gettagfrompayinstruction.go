package operations

import (
	"openapi/pkg/models/shared"
)

type GetTagFromPayInstructionPathParams struct {
	EmployeeID       string `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID       string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayInstructionID string `pathParam:"style=simple,explode=false,name=PayInstructionId"`
	TagID            string `pathParam:"style=simple,explode=false,name=TagId"`
}

type GetTagFromPayInstructionHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetTagFromPayInstructionRequest struct {
	PathParams GetTagFromPayInstructionPathParams
	Headers    GetTagFromPayInstructionHeaders
}

type GetTagFromPayInstructionResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
	Tag         *shared.Tag
}
