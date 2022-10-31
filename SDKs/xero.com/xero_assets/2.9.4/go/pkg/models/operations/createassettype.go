package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAssetTypeHeaders struct {
	XeroTenantID string `header:"style=simple,explode=false,name=xero-tenant-id"`
}

type CreateAssetTypeSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type CreateAssetTypeRequest struct {
	Headers  CreateAssetTypeHeaders
	Request  *shared.AssetType `request:"mediaType=application/json"`
	Security CreateAssetTypeSecurity
}

type CreateAssetTypeResponse struct {
	AssetType   *shared.AssetType
	ContentType string
	StatusCode  int64
}
