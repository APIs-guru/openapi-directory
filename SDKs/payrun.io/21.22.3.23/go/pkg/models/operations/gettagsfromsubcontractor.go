package operations

import (
	"openapi/pkg/models/shared"
)

type GetTagsFromSubContractorPathParams struct {
	EmployerID      string `pathParam:"style=simple,explode=false,name=EmployerId"`
	SubContractorID string `pathParam:"style=simple,explode=false,name=SubContractorId"`
}

type GetTagsFromSubContractorHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetTagsFromSubContractorRequest struct {
	PathParams GetTagsFromSubContractorPathParams
	Headers    GetTagsFromSubContractorHeaders
}

type GetTagsFromSubContractorResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
