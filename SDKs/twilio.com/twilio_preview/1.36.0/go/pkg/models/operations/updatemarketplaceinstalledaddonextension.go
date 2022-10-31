package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateMarketplaceInstalledAddOnExtensionServers = []string{
	"https://preview.twilio.com",
}

type UpdateMarketplaceInstalledAddOnExtensionPathParams struct {
	InstalledAddOnSid string `pathParam:"style=simple,explode=false,name=InstalledAddOnSid"`
	Sid               string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateMarketplaceInstalledAddOnExtensionUpdateMarketplaceInstalledAddOnExtensionRequest struct {
	Enabled bool `form:"name=Enabled"`
}

type UpdateMarketplaceInstalledAddOnExtensionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateMarketplaceInstalledAddOnExtensionRequest struct {
	ServerURL  *string
	PathParams UpdateMarketplaceInstalledAddOnExtensionPathParams
	Request    *UpdateMarketplaceInstalledAddOnExtensionUpdateMarketplaceInstalledAddOnExtensionRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateMarketplaceInstalledAddOnExtensionSecurity
}

type UpdateMarketplaceInstalledAddOnExtensionResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	PreviewMarketplaceInstalledAddOnInstalledAddOnExtension *shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension
}
