package operations

import (
	"openapi/pkg/models/shared"
)

type GetAssetsQueryParams struct {
	Search *string `queryParam:"style=form,explode=true,name=search"`
}

type GetAssetsSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetAssetsRequest struct {
	QueryParams GetAssetsQueryParams
	Security    GetAssetsSecurity
}

type GetAssetsResponse struct {
	Assets      []shared.Asset
	ContentType string
	StatusCode  int64
}
