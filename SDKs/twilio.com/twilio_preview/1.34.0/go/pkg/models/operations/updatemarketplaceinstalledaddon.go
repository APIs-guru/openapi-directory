package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateMarketplaceInstalledAddOnServers = []string{
	"https://preview.twilio.com",
}

type UpdateMarketplaceInstalledAddOnPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateMarketplaceInstalledAddOnRequestBodyUpdateMarketplaceInstalledAddOnRequest struct {
	Configuration *interface{} `form:"name=Configuration"`
	UniqueName    *string      `form:"name=UniqueName"`
}

type UpdateMarketplaceInstalledAddOnSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateMarketplaceInstalledAddOnRequest struct {
	ServerURL  *string
	PathParams UpdateMarketplaceInstalledAddOnPathParams
	Request    *UpdateMarketplaceInstalledAddOnRequestBodyUpdateMarketplaceInstalledAddOnRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateMarketplaceInstalledAddOnSecurity
}

type UpdateMarketplaceInstalledAddOnResponse struct {
	ContentType                      string
	StatusCode                       int64
	PreviewMarketplaceInstalledAddOn *shared.PreviewMarketplaceInstalledAddOn
}
