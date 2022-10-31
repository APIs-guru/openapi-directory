package operations

import (
	"openapi/pkg/models/shared"
)

type EnableUcsManagerPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type EnableUcsManagerSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type EnableUcsManagerRequest struct {
	PathParams EnableUcsManagerPathParams
	Security   EnableUcsManagerSecurity
}

type EnableUcsManagerResponse struct {
	ContentType string
	StatusCode  int64
}
