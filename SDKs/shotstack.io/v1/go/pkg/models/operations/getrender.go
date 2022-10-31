package operations

import (
	"openapi/pkg/models/shared"
)

type GetRenderPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetRenderSecurity struct {
	DeveloperKey shared.SchemeDeveloperKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRenderRequest struct {
	PathParams GetRenderPathParams
	Security   GetRenderSecurity
}

type GetRenderResponse struct {
	ContentType    string
	RenderResponse *shared.RenderResponse
	StatusCode     int64
}
