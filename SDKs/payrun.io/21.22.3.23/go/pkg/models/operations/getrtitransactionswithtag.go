package operations

import (
	"openapi/pkg/models/shared"
)

type GetRtiTransactionsWithTagPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
	TagID      string `pathParam:"style=simple,explode=false,name=TagId"`
}

type GetRtiTransactionsWithTagHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetRtiTransactionsWithTagRequest struct {
	PathParams GetRtiTransactionsWithTagPathParams
	Headers    GetRtiTransactionsWithTagHeaders
}

type GetRtiTransactionsWithTagResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
