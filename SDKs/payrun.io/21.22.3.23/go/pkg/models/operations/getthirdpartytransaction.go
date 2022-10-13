package operations

import (
	"openapi/pkg/models/shared"
)

type GetThirdPartyTransactionPathParams struct {
	EmployerID              string `pathParam:"style=simple,explode=false,name=EmployerId"`
	ThirdPartyTransactionID string `pathParam:"style=simple,explode=false,name=ThirdPartyTransactionId"`
}

type GetThirdPartyTransactionHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetThirdPartyTransactionRequest struct {
	PathParams GetThirdPartyTransactionPathParams
	Headers    GetThirdPartyTransactionHeaders
}

type GetThirdPartyTransactionResponse struct {
	ContentType           string
	ErrorModel            *shared.ErrorModel
	StatusCode            int64
	ThirdPartyTransaction *interface{}
}
