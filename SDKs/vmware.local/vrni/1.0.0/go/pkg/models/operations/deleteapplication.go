package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteApplicationPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteApplicationSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteApplicationRequest struct {
	PathParams DeleteApplicationPathParams
	Security   DeleteApplicationSecurity
}

type DeleteApplicationResponse struct {
	ContentType string
	StatusCode  int64
}
