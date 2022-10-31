package operations

import (
	"openapi/pkg/models/shared"
)

type GetAssetSettingsHeaders struct {
	XeroTenantID string `header:"style=simple,explode=false,name=xero-tenant-id"`
}

type GetAssetSettingsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetAssetSettingsRequest struct {
	Headers  GetAssetSettingsHeaders
	Security GetAssetSettingsSecurity
}

type GetAssetSettingsResponse struct {
	ContentType string
	Setting     *shared.Setting
	StatusCode  int64
}
