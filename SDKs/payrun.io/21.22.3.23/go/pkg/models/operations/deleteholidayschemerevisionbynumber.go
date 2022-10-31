package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteHolidaySchemeRevisionByNumberPathParams struct {
	EmployerID      string `pathParam:"style=simple,explode=false,name=EmployerId"`
	HolidaySchemeID string `pathParam:"style=simple,explode=false,name=HolidaySchemeId"`
	RevisionNumber  string `pathParam:"style=simple,explode=false,name=RevisionNumber"`
}

type DeleteHolidaySchemeRevisionByNumberHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type DeleteHolidaySchemeRevisionByNumberRequest struct {
	PathParams DeleteHolidaySchemeRevisionByNumberPathParams
	Headers    DeleteHolidaySchemeRevisionByNumberHeaders
}

type DeleteHolidaySchemeRevisionByNumberResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
