package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAristaSwitchPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteAristaSwitchSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteAristaSwitchRequest struct {
	PathParams DeleteAristaSwitchPathParams
	Security   DeleteAristaSwitchSecurity
}

type DeleteAristaSwitchResponse struct {
	ContentType string
	StatusCode  int64
}
