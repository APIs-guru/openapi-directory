package operations

import (
	"openapi/pkg/models/shared"
)

type GetTagsFromCisLineTypePathParams struct {
	CisLineTypeID string `pathParam:"style=simple,explode=false,name=CisLineTypeId"`
	EmployerID    string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetTagsFromCisLineTypeHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetTagsFromCisLineTypeRequest struct {
	PathParams GetTagsFromCisLineTypePathParams
	Headers    GetTagsFromCisLineTypeHeaders
}

type GetTagsFromCisLineTypeResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
