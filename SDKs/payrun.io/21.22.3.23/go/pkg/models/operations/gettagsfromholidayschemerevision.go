package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetTagsFromHolidaySchemeRevisionPathParams struct {
	EffectiveDate   time.Time `pathParam:"style=simple,explode=false,name=EffectiveDate"`
	EmployerID      string    `pathParam:"style=simple,explode=false,name=EmployerId"`
	HolidaySchemeID string    `pathParam:"style=simple,explode=false,name=HolidaySchemeId"`
}

type GetTagsFromHolidaySchemeRevisionHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetTagsFromHolidaySchemeRevisionRequest struct {
	PathParams GetTagsFromHolidaySchemeRevisionPathParams
	Headers    GetTagsFromHolidaySchemeRevisionHeaders
}

type GetTagsFromHolidaySchemeRevisionResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
