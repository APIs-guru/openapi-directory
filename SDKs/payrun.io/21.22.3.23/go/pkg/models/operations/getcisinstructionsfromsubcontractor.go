package operations

import (
	"openapi/pkg/models/shared"
)

type GetCisInstructionsFromSubContractorPathParams struct {
	EmployerID      string `pathParam:"style=simple,explode=false,name=EmployerId"`
	SubContractorID string `pathParam:"style=simple,explode=false,name=SubContractorId"`
}

type GetCisInstructionsFromSubContractorHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetCisInstructionsFromSubContractorRequest struct {
	PathParams GetCisInstructionsFromSubContractorPathParams
	Headers    GetCisInstructionsFromSubContractorHeaders
}

type GetCisInstructionsFromSubContractorResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
