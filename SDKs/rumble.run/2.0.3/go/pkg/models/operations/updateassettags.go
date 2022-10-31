package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAssetTagsPathParams struct {
	AssetID string `pathParam:"style=simple,explode=false,name=asset_id"`
}

type UpdateAssetTagsSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type UpdateAssetTagsRequest struct {
	PathParams UpdateAssetTagsPathParams
	Request    shared.AssetTags `request:"mediaType=application/json"`
	Security   UpdateAssetTagsSecurity
}

type UpdateAssetTagsResponse struct {
	Asset       *shared.Asset
	ContentType string
	StatusCode  int64
}
