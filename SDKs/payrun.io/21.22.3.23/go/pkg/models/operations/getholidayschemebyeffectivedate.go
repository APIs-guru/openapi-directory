package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetHolidaySchemeByEffectiveDatePathParams struct {
	EffectiveDate   time.Time `pathParam:"style=simple,explode=false,name=EffectiveDate"`
	EmployerID      string    `pathParam:"style=simple,explode=false,name=EmployerId"`
	HolidaySchemeID string    `pathParam:"style=simple,explode=false,name=HolidaySchemeId"`
}

type GetHolidaySchemeByEffectiveDateHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetHolidaySchemeByEffectiveDateRequest struct {
	PathParams GetHolidaySchemeByEffectiveDatePathParams
	Headers    GetHolidaySchemeByEffectiveDateHeaders
}

type GetHolidaySchemeByEffectiveDateResponse struct {
	ContentType   string
	ErrorModel    *shared.ErrorModel
	HolidayScheme *shared.HolidayScheme
	StatusCode    int64
}
