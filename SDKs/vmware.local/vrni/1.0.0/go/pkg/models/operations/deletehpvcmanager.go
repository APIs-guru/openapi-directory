package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteHpvcManagerPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteHpvcManagerSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteHpvcManagerRequest struct {
	PathParams DeleteHpvcManagerPathParams
	Security   DeleteHpvcManagerSecurity
}

type DeleteHpvcManagerResponse struct {
	ContentType string
	StatusCode  int64
}
