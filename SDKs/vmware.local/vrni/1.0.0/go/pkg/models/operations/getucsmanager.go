package operations

import (
	"openapi/pkg/models/shared"
)

type GetUcsManagerPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetUcsManagerSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetUcsManagerRequest struct {
	PathParams GetUcsManagerPathParams
	Security   GetUcsManagerSecurity
}

type GetUcsManagerResponse struct {
	ContentType      string
	StatusCode       int64
	SwitchDataSource *shared.SwitchDataSource
}
