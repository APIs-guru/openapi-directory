package operations

import (
	"openapi/pkg/models/shared"
)

type GetHolidaySchemeRevisionByNumberPathParams struct {
	EmployerID      string `pathParam:"style=simple,explode=false,name=EmployerId"`
	HolidaySchemeID string `pathParam:"style=simple,explode=false,name=HolidaySchemeId"`
	RevisionNumber  string `pathParam:"style=simple,explode=false,name=RevisionNumber"`
}

type GetHolidaySchemeRevisionByNumberHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetHolidaySchemeRevisionByNumberRequest struct {
	PathParams GetHolidaySchemeRevisionByNumberPathParams
	Headers    GetHolidaySchemeRevisionByNumberHeaders
}

type GetHolidaySchemeRevisionByNumberResponse struct {
	ContentType   string
	ErrorModel    *shared.ErrorModel
	HolidayScheme *shared.HolidayScheme
	StatusCode    int64
}
