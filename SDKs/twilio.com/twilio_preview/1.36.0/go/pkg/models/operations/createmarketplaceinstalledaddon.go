package operations

import (
	"openapi/pkg/models/shared"
)

var CreateMarketplaceInstalledAddOnServers = []string{
	"https://preview.twilio.com",
}

type CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest struct {
	AcceptTermsOfService bool         `form:"name=AcceptTermsOfService"`
	AvailableAddOnSid    string       `form:"name=AvailableAddOnSid"`
	Configuration        *interface{} `form:"name=Configuration"`
	UniqueName           *string      `form:"name=UniqueName"`
}

type CreateMarketplaceInstalledAddOnSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateMarketplaceInstalledAddOnRequest struct {
	ServerURL *string
	Request   *CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateMarketplaceInstalledAddOnSecurity
}

type CreateMarketplaceInstalledAddOnResponse struct {
	ContentType                      string
	StatusCode                       int64
	PreviewMarketplaceInstalledAddOn *shared.PreviewMarketplaceInstalledAddOn
}
