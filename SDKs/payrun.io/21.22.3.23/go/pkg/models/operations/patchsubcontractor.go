package operations

import (
	"openapi/pkg/models/shared"
)

type PatchSubContractorPathParams struct {
	EmployerID      string `pathParam:"style=simple,explode=false,name=EmployerId"`
	SubContractorID string `pathParam:"style=simple,explode=false,name=SubContractorId"`
}

type PatchSubContractorHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type PatchSubContractorRequest struct {
	PathParams PatchSubContractorPathParams
	Headers    PatchSubContractorHeaders
	Request    shared.SubContractor `request:"mediaType=application/json"`
}

type PatchSubContractorResponse struct {
	ContentType   string
	ErrorModel    *shared.ErrorModel
	StatusCode    int64
	SubContractor *shared.SubContractor
}
