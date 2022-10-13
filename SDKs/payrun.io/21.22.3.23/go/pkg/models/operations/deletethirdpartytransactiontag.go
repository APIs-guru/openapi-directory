package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteThirdPartyTransactionTagPathParams struct {
	EmployerID              string `pathParam:"style=simple,explode=false,name=EmployerId"`
	TagID                   string `pathParam:"style=simple,explode=false,name=TagId"`
	ThirdPartyTransactionID string `pathParam:"style=simple,explode=false,name=ThirdPartyTransactionId"`
}

type DeleteThirdPartyTransactionTagHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type DeleteThirdPartyTransactionTagRequest struct {
	PathParams DeleteThirdPartyTransactionTagPathParams
	Headers    DeleteThirdPartyTransactionTagHeaders
}

type DeleteThirdPartyTransactionTagResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
