package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteThirdPartyTransactionPathParams struct {
	EmployerID              string `pathParam:"style=simple,explode=false,name=EmployerId"`
	ThirdPartyTransactionID string `pathParam:"style=simple,explode=false,name=ThirdPartyTransactionId"`
}

type DeleteThirdPartyTransactionHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type DeleteThirdPartyTransactionRequest struct {
	PathParams DeleteThirdPartyTransactionPathParams
	Headers    DeleteThirdPartyTransactionHeaders
}

type DeleteThirdPartyTransactionResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
