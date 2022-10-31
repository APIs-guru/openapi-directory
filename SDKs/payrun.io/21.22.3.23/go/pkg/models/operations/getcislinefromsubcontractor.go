package operations

import (
	"openapi/pkg/models/shared"
)

type GetCisLineFromSubContractorPathParams struct {
	CisLineID       string `pathParam:"style=simple,explode=false,name=CisLineId"`
	EmployerID      string `pathParam:"style=simple,explode=false,name=EmployerId"`
	SubContractorID string `pathParam:"style=simple,explode=false,name=SubContractorId"`
}

type GetCisLineFromSubContractorHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetCisLineFromSubContractorRequest struct {
	PathParams GetCisLineFromSubContractorPathParams
	Headers    GetCisLineFromSubContractorHeaders
}

type GetCisLineFromSubContractorResponse struct {
	CisLine     *shared.CisLine
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
