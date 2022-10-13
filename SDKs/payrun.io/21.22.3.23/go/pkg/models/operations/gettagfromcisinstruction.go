package operations

import (
	"openapi/pkg/models/shared"
)

type GetTagFromCisInstructionPathParams struct {
	CisInstructionID string `pathParam:"style=simple,explode=false,name=CisInstructionId"`
	EmployerID       string `pathParam:"style=simple,explode=false,name=EmployerId"`
	SubContractorID  string `pathParam:"style=simple,explode=false,name=SubContractorId"`
	TagID            string `pathParam:"style=simple,explode=false,name=TagId"`
}

type GetTagFromCisInstructionHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetTagFromCisInstructionRequest struct {
	PathParams GetTagFromCisInstructionPathParams
	Headers    GetTagFromCisInstructionHeaders
}

type GetTagFromCisInstructionResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
	Tag         *shared.Tag
}
