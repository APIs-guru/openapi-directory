package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllCisLineTagsPathParams struct {
	EmployerID      string `pathParam:"style=simple,explode=false,name=EmployerId"`
	SubContractorID string `pathParam:"style=simple,explode=false,name=SubContractorId"`
}

type GetAllCisLineTagsHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetAllCisLineTagsRequest struct {
	PathParams GetAllCisLineTagsPathParams
	Headers    GetAllCisLineTagsHeaders
}

type GetAllCisLineTagsResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
