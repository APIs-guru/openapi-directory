package operations

import (
	"openapi/pkg/models/shared"
)

type GetBreakTypePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetBreakTypeSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetBreakTypeRequest struct {
	PathParams GetBreakTypePathParams
	Security   GetBreakTypeSecurity
}

type GetBreakTypeResponse struct {
	ContentType          string
	GetBreakTypeResponse *shared.GetBreakTypeResponse
	StatusCode           int64
}
