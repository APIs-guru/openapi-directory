package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllSubContractorTagsPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetAllSubContractorTagsHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetAllSubContractorTagsRequest struct {
	PathParams GetAllSubContractorTagsPathParams
	Headers    GetAllSubContractorTagsHeaders
}

type GetAllSubContractorTagsResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
