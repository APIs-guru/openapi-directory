package operations

import (
	"openapi/pkg/models/shared"
)

type GetAssetByRenderIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetAssetByRenderIDSecurity struct {
	DeveloperKey shared.SchemeDeveloperKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetAssetByRenderIDRequest struct {
	PathParams GetAssetByRenderIDPathParams
	Security   GetAssetByRenderIDSecurity
}

type GetAssetByRenderIDResponse struct {
	AssetRenderResponse *shared.AssetRenderResponse
	ContentType         string
	StatusCode          int64
}
