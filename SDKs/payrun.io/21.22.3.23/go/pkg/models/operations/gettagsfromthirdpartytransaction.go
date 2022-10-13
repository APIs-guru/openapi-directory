package operations

import (
	"openapi/pkg/models/shared"
)

type GetTagsFromThirdPartyTransactionPathParams struct {
	EmployerID              string `pathParam:"style=simple,explode=false,name=EmployerId"`
	ThirdPartyTransactionID string `pathParam:"style=simple,explode=false,name=ThirdPartyTransactionId"`
}

type GetTagsFromThirdPartyTransactionHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetTagsFromThirdPartyTransactionRequest struct {
	PathParams GetTagsFromThirdPartyTransactionPathParams
	Headers    GetTagsFromThirdPartyTransactionHeaders
}

type GetTagsFromThirdPartyTransactionResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
