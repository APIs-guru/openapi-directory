package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllHolidaySchemeTagsPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetAllHolidaySchemeTagsHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetAllHolidaySchemeTagsRequest struct {
	PathParams GetAllHolidaySchemeTagsPathParams
	Headers    GetAllHolidaySchemeTagsHeaders
}

type GetAllHolidaySchemeTagsResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
