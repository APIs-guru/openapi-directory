package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllRtiTransactionTagsPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetAllRtiTransactionTagsHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetAllRtiTransactionTagsRequest struct {
	PathParams GetAllRtiTransactionTagsPathParams
	Headers    GetAllRtiTransactionTagsHeaders
}

type GetAllRtiTransactionTagsResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
