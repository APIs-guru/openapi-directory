package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSubContractorPathParams struct {
	EmployerID      string `pathParam:"style=simple,explode=false,name=EmployerId"`
	SubContractorID string `pathParam:"style=simple,explode=false,name=SubContractorId"`
}

type DeleteSubContractorHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type DeleteSubContractorRequest struct {
	PathParams DeleteSubContractorPathParams
	Headers    DeleteSubContractorHeaders
}

type DeleteSubContractorResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
