package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCisInstructionPathParams struct {
	CisInstructionID string `pathParam:"style=simple,explode=false,name=CisInstructionId"`
	EmployerID       string `pathParam:"style=simple,explode=false,name=EmployerId"`
	SubContractorID  string `pathParam:"style=simple,explode=false,name=SubContractorId"`
}

type DeleteCisInstructionHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type DeleteCisInstructionRequest struct {
	PathParams DeleteCisInstructionPathParams
	Headers    DeleteCisInstructionHeaders
}

type DeleteCisInstructionResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
