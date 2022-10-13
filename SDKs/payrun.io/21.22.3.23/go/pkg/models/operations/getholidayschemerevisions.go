package operations

import (
	"openapi/pkg/models/shared"
)

type GetHolidaySchemeRevisionsPathParams struct {
	EmployerID      string `pathParam:"style=simple,explode=false,name=EmployerId"`
	HolidaySchemeID string `pathParam:"style=simple,explode=false,name=HolidaySchemeId"`
}

type GetHolidaySchemeRevisionsHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetHolidaySchemeRevisionsRequest struct {
	PathParams GetHolidaySchemeRevisionsPathParams
	Headers    GetHolidaySchemeRevisionsHeaders
}

type GetHolidaySchemeRevisionsResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
