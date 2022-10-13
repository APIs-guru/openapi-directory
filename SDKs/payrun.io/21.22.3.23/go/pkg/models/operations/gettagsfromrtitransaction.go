package operations

import (
	"openapi/pkg/models/shared"
)

type GetTagsFromRtiTransactionPathParams struct {
	EmployerID       string `pathParam:"style=simple,explode=false,name=EmployerId"`
	RtiTransactionID string `pathParam:"style=simple,explode=false,name=RtiTransactionId"`
}

type GetTagsFromRtiTransactionHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetTagsFromRtiTransactionRequest struct {
	PathParams GetTagsFromRtiTransactionPathParams
	Headers    GetTagsFromRtiTransactionHeaders
}

type GetTagsFromRtiTransactionResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
