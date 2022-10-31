package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllEmployeeTagsPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetAllEmployeeTagsHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetAllEmployeeTagsRequest struct {
	PathParams GetAllEmployeeTagsPathParams
	Headers    GetAllEmployeeTagsHeaders
}

type GetAllEmployeeTagsResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
