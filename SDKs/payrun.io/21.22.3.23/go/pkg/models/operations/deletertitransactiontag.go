package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRtiTransactionTagPathParams struct {
	EmployerID       string `pathParam:"style=simple,explode=false,name=EmployerId"`
	RtiTransactionID string `pathParam:"style=simple,explode=false,name=RtiTransactionId"`
	TagID            string `pathParam:"style=simple,explode=false,name=TagId"`
}

type DeleteRtiTransactionTagHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type DeleteRtiTransactionTagRequest struct {
	PathParams DeleteRtiTransactionTagPathParams
	Headers    DeleteRtiTransactionTagHeaders
}

type DeleteRtiTransactionTagResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
