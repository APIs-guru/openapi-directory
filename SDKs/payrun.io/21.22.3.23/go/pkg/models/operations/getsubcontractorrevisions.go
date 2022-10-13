package operations

import (
	"openapi/pkg/models/shared"
)

type GetSubContractorRevisionsPathParams struct {
	EmployerID      string `pathParam:"style=simple,explode=false,name=EmployerId"`
	SubContractorID string `pathParam:"style=simple,explode=false,name=SubContractorId"`
}

type GetSubContractorRevisionsHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetSubContractorRevisionsRequest struct {
	PathParams GetSubContractorRevisionsPathParams
	Headers    GetSubContractorRevisionsHeaders
}

type GetSubContractorRevisionsResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
