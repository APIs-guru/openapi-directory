package operations

import (
	"openapi/pkg/models/shared"
)

type PutPayInstructionTagPathParams struct {
	EmployeeID       string `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID       string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayInstructionID string `pathParam:"style=simple,explode=false,name=PayInstructionId"`
	TagID            string `pathParam:"style=simple,explode=false,name=TagId"`
}

type PutPayInstructionTagHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type PutPayInstructionTagRequest struct {
	PathParams PutPayInstructionTagPathParams
	Headers    PutPayInstructionTagHeaders
}

type PutPayInstructionTagResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
	Tag         *shared.Tag
}
