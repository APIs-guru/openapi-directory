package operations

import (
	"openapi/pkg/models/shared"
)

type GetThirdPartyTransactionPathParams struct {
	EmployerID              string `pathParam:"style=simple,explode=false,name=EmployerId"`
	ThirdPartyTransactionID string `pathParam:"style=simple,explode=false,name=ThirdPartyTransactionId"`
}

type GetThirdPartyTransactionHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
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
