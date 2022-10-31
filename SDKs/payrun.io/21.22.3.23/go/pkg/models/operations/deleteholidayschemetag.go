package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteHolidaySchemeTagPathParams struct {
	EmployerID      string `pathParam:"style=simple,explode=false,name=EmployerId"`
	HolidaySchemeID string `pathParam:"style=simple,explode=false,name=HolidaySchemeId"`
	TagID           string `pathParam:"style=simple,explode=false,name=TagId"`
}

type DeleteHolidaySchemeTagHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type DeleteHolidaySchemeTagRequest struct {
	PathParams DeleteHolidaySchemeTagPathParams
	Headers    DeleteHolidaySchemeTagHeaders
}

type DeleteHolidaySchemeTagResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
