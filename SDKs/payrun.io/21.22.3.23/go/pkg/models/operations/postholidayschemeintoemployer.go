package operations

import (
	"openapi/pkg/models/shared"
)

type PostHolidaySchemeIntoEmployerPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type PostHolidaySchemeIntoEmployerHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type PostHolidaySchemeIntoEmployerRequest struct {
	PathParams PostHolidaySchemeIntoEmployerPathParams
	Headers    PostHolidaySchemeIntoEmployerHeaders
	Request    shared.HolidayScheme `request:"mediaType=application/json"`
}

type PostHolidaySchemeIntoEmployerResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	Link        *shared.Link
	StatusCode  int64
}
