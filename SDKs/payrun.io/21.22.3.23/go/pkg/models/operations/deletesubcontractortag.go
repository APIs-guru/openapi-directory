package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSubContractorTagPathParams struct {
	EmployerID      string `pathParam:"style=simple,explode=false,name=EmployerId"`
	SubContractorID string `pathParam:"style=simple,explode=false,name=SubContractorId"`
	TagID           string `pathParam:"style=simple,explode=false,name=TagId"`
}

type DeleteSubContractorTagHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type DeleteSubContractorTagRequest struct {
	PathParams DeleteSubContractorTagPathParams
	Headers    DeleteSubContractorTagHeaders
}

type DeleteSubContractorTagResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
