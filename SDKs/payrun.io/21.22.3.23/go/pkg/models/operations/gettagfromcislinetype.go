package operations

import (
	"openapi/pkg/models/shared"
)

type GetTagFromCisLineTypePathParams struct {
	CisLineTypeID string `pathParam:"style=simple,explode=false,name=CisLineTypeId"`
	EmployerID    string `pathParam:"style=simple,explode=false,name=EmployerId"`
	TagID         string `pathParam:"style=simple,explode=false,name=TagId"`
}

type GetTagFromCisLineTypeHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetTagFromCisLineTypeRequest struct {
	PathParams GetTagFromCisLineTypePathParams
	Headers    GetTagFromCisLineTypeHeaders
}

type GetTagFromCisLineTypeResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
	Tag         *shared.Tag
}
