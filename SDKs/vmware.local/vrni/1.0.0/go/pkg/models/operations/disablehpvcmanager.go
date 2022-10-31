package operations

import (
	"openapi/pkg/models/shared"
)

type DisableHpvcManagerPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DisableHpvcManagerSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type DisableHpvcManagerRequest struct {
	PathParams DisableHpvcManagerPathParams
	Security   DisableHpvcManagerSecurity
}

type DisableHpvcManagerResponse struct {
	ContentType string
	StatusCode  int64
}
