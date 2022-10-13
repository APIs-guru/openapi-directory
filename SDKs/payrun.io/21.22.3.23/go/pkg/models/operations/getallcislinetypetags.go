package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllCisLineTypeTagsPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetAllCisLineTypeTagsHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetAllCisLineTypeTagsRequest struct {
	PathParams GetAllCisLineTypeTagsPathParams
	Headers    GetAllCisLineTypeTagsHeaders
}

type GetAllCisLineTypeTagsResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
