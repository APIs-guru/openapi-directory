package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllCisInstructionTagsPathParams struct {
	EmployerID      string `pathParam:"style=simple,explode=false,name=EmployerId"`
	SubContractorID string `pathParam:"style=simple,explode=false,name=SubContractorId"`
}

type GetAllCisInstructionTagsHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetAllCisInstructionTagsRequest struct {
	PathParams GetAllCisInstructionTagsPathParams
	Headers    GetAllCisInstructionTagsHeaders
}

type GetAllCisInstructionTagsResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
