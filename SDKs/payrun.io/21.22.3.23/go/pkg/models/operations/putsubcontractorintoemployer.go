package operations

import (
	"openapi/pkg/models/shared"
)

type PutSubContractorIntoEmployerPathParams struct {
	EmployerID      string `pathParam:"style=simple,explode=false,name=EmployerId"`
	SubContractorID string `pathParam:"style=simple,explode=false,name=SubContractorId"`
}

type PutSubContractorIntoEmployerHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type PutSubContractorIntoEmployerRequest struct {
	PathParams PutSubContractorIntoEmployerPathParams
	Headers    PutSubContractorIntoEmployerHeaders
	Request    shared.SubContractor `request:"mediaType=application/json"`
}

type PutSubContractorIntoEmployerResponse struct {
	ContentType   string
	ErrorModel    *shared.ErrorModel
	StatusCode    int64
	SubContractor *shared.SubContractor
}
