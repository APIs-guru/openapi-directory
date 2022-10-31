package operations

import (
	"openapi/pkg/models/shared"
)

type GetTagsFromHolidaySchemePathParams struct {
	EmployerID      string `pathParam:"style=simple,explode=false,name=EmployerId"`
	HolidaySchemeID string `pathParam:"style=simple,explode=false,name=HolidaySchemeId"`
}

type GetTagsFromHolidaySchemeHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetTagsFromHolidaySchemeRequest struct {
	PathParams GetTagsFromHolidaySchemePathParams
	Headers    GetTagsFromHolidaySchemeHeaders
}

type GetTagsFromHolidaySchemeResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
