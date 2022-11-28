package operations

import (
	"openapi/pkg/models/shared"
)

var FetchMarketplaceInstalledAddOnExtensionServerList = []string{
	"https://preview.twilio.com",
}

type FetchMarketplaceInstalledAddOnExtensionPathParams struct {
	InstalledAddOnSid string `pathParam:"style=simple,explode=false,name=InstalledAddOnSid"`
	Sid               string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchMarketplaceInstalledAddOnExtensionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchMarketplaceInstalledAddOnExtensionRequest struct {
	ServerURL  *string
	PathParams FetchMarketplaceInstalledAddOnExtensionPathParams
	Security   FetchMarketplaceInstalledAddOnExtensionSecurity
}

type FetchMarketplaceInstalledAddOnExtensionResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	PreviewMarketplaceInstalledAddOnInstalledAddOnExtension *shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension
}
