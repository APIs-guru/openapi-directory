package operations

import (
	"openapi/pkg/models/shared"
)

type GetCisLineTypesWithTagPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
	TagID      string `pathParam:"style=simple,explode=false,name=TagId"`
}

type GetCisLineTypesWithTagHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetCisLineTypesWithTagRequest struct {
	PathParams GetCisLineTypesWithTagPathParams
	Headers    GetCisLineTypesWithTagHeaders
}

type GetCisLineTypesWithTagResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
