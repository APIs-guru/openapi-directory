package operations

import (
	"openapi/pkg/models/shared"
)

type DisableAristaSwitchPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DisableAristaSwitchSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type DisableAristaSwitchRequest struct {
	PathParams DisableAristaSwitchPathParams
	Security   DisableAristaSwitchSecurity
}

type DisableAristaSwitchResponse struct {
	ContentType string
	StatusCode  int64
}
