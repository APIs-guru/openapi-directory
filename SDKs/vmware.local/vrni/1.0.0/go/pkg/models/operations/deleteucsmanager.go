package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteUcsManagerPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteUcsManagerSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteUcsManagerRequest struct {
	PathParams DeleteUcsManagerPathParams
	Security   DeleteUcsManagerSecurity
}

type DeleteUcsManagerResponse struct {
	ContentType string
	StatusCode  int64
}
