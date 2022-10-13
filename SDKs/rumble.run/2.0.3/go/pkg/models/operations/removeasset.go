package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveAssetPathParams struct {
	AssetID string `pathParam:"style=simple,explode=false,name=asset_id"`
}

type RemoveAssetSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type RemoveAssetRequest struct {
	PathParams RemoveAssetPathParams
	Security   RemoveAssetSecurity
}

type RemoveAssetResponse struct {
	ContentType string
	StatusCode  int64
}
