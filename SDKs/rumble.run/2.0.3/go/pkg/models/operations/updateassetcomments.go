package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAssetCommentsPathParams struct {
	AssetID string `pathParam:"style=simple,explode=false,name=asset_id"`
}

type UpdateAssetCommentsSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type UpdateAssetCommentsRequest struct {
	PathParams UpdateAssetCommentsPathParams
	Request    shared.AssetComments `request:"mediaType=application/json"`
	Security   UpdateAssetCommentsSecurity
}

type UpdateAssetCommentsResponse struct {
	Asset       *shared.Asset
	ContentType string
	StatusCode  int64
}
