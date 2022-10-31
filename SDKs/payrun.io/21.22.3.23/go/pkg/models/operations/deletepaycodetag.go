package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePayCodeTagPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayCodeID  string `pathParam:"style=simple,explode=false,name=PayCodeId"`
	TagID      string `pathParam:"style=simple,explode=false,name=TagId"`
}

type DeletePayCodeTagHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type DeletePayCodeTagRequest struct {
	PathParams DeletePayCodeTagPathParams
	Headers    DeletePayCodeTagHeaders
}

type DeletePayCodeTagResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
