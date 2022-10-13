package operations

import (
	"openapi/pkg/models/shared"
)

type GetAssetTypesHeaders struct {
	XeroTenantID string `header:"name=xero-tenant-id"`
}

type GetAssetTypesSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetAssetTypesRequest struct {
	Headers  GetAssetTypesHeaders
	Security GetAssetTypesSecurity
}

type GetAssetTypesResponse struct {
	AssetTypes  []shared.AssetType
	ContentType string
	StatusCode  int64
}
