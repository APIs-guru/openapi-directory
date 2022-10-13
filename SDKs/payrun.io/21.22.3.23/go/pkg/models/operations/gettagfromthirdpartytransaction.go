package operations

import (
	"openapi/pkg/models/shared"
)

type GetTagFromThirdPartyTransactionPathParams struct {
	EmployerID              string `pathParam:"style=simple,explode=false,name=EmployerId"`
	TagID                   string `pathParam:"style=simple,explode=false,name=TagId"`
	ThirdPartyTransactionID string `pathParam:"style=simple,explode=false,name=ThirdPartyTransactionId"`
}

type GetTagFromThirdPartyTransactionHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetTagFromThirdPartyTransactionRequest struct {
	PathParams GetTagFromThirdPartyTransactionPathParams
	Headers    GetTagFromThirdPartyTransactionHeaders
}

type GetTagFromThirdPartyTransactionResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
	Tag         *shared.Tag
}
