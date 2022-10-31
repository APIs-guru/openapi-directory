package operations

import (
	"openapi/pkg/models/shared"
)

type GetTagFromPayLinePathParams struct {
	EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayLineID  string `pathParam:"style=simple,explode=false,name=PayLineId"`
	TagID      string `pathParam:"style=simple,explode=false,name=TagId"`
}

type GetTagFromPayLineHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetTagFromPayLineRequest struct {
	PathParams GetTagFromPayLinePathParams
	Headers    GetTagFromPayLineHeaders
}

type GetTagFromPayLineResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
	Tag         *shared.Tag
}
