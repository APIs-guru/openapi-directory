package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCisInstructionTagPathParams struct {
	CisInstructionID string `pathParam:"style=simple,explode=false,name=CisInstructionId"`
	EmployerID       string `pathParam:"style=simple,explode=false,name=EmployerId"`
	SubContractorID  string `pathParam:"style=simple,explode=false,name=SubContractorId"`
	TagID            string `pathParam:"style=simple,explode=false,name=TagId"`
}

type DeleteCisInstructionTagHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type DeleteCisInstructionTagRequest struct {
	PathParams DeleteCisInstructionTagPathParams
	Headers    DeleteCisInstructionTagHeaders
}

type DeleteCisInstructionTagResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
