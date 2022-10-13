package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteShiftPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteShiftSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteShiftRequest struct {
	PathParams DeleteShiftPathParams
	Security   DeleteShiftSecurity
}

type DeleteShiftResponse struct {
	ContentType         string
	DeleteShiftResponse *shared.DeleteShiftResponse
	StatusCode          int64
}
