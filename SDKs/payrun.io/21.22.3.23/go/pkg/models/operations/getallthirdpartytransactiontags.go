package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllThirdPartyTransactionTagsPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetAllThirdPartyTransactionTagsHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetAllThirdPartyTransactionTagsRequest struct {
	PathParams GetAllThirdPartyTransactionTagsPathParams
	Headers    GetAllThirdPartyTransactionTagsHeaders
}

type GetAllThirdPartyTransactionTagsResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
