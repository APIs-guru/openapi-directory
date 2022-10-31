package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type DeleteHolidaySchemeRevisionPathParams struct {
	EffectiveDate   time.Time `pathParam:"style=simple,explode=false,name=EffectiveDate"`
	EmployerID      string    `pathParam:"style=simple,explode=false,name=EmployerId"`
	HolidaySchemeID string    `pathParam:"style=simple,explode=false,name=HolidaySchemeId"`
}

type DeleteHolidaySchemeRevisionHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type DeleteHolidaySchemeRevisionRequest struct {
	PathParams DeleteHolidaySchemeRevisionPathParams
	Headers    DeleteHolidaySchemeRevisionHeaders
}

type DeleteHolidaySchemeRevisionResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
