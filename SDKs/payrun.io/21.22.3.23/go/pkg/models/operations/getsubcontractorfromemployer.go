package operations

import (
	"openapi/pkg/models/shared"
)

type GetSubContractorFromEmployerPathParams struct {
	EmployerID      string `pathParam:"style=simple,explode=false,name=EmployerId"`
	SubContractorID string `pathParam:"style=simple,explode=false,name=SubContractorId"`
}

type GetSubContractorFromEmployerHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetSubContractorFromEmployerRequest struct {
	PathParams GetSubContractorFromEmployerPathParams
	Headers    GetSubContractorFromEmployerHeaders
}

type GetSubContractorFromEmployerResponse struct {
	ContentType   string
	ErrorModel    *shared.ErrorModel
	StatusCode    int64
	SubContractor *shared.SubContractor
}
