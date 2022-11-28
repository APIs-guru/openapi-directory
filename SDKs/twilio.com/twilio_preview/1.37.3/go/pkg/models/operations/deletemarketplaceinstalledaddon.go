package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteMarketplaceInstalledAddOnServerList = []string{
	"https://preview.twilio.com",
}

type DeleteMarketplaceInstalledAddOnPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteMarketplaceInstalledAddOnSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteMarketplaceInstalledAddOnRequest struct {
	ServerURL  *string
	PathParams DeleteMarketplaceInstalledAddOnPathParams
	Security   DeleteMarketplaceInstalledAddOnSecurity
}

type DeleteMarketplaceInstalledAddOnResponse struct {
	ContentType string
	StatusCode  int64
}
