package operations

import (
	"openapi/pkg/models/shared"
)

var FetchMarketplaceAvailableAddOnServers = []string{
	"https://preview.twilio.com",
}

type FetchMarketplaceAvailableAddOnPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchMarketplaceAvailableAddOnSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchMarketplaceAvailableAddOnRequest struct {
	ServerURL  *string
	PathParams FetchMarketplaceAvailableAddOnPathParams
	Security   FetchMarketplaceAvailableAddOnSecurity
}

type FetchMarketplaceAvailableAddOnResponse struct {
	ContentType                      string
	StatusCode                       int64
	PreviewMarketplaceAvailableAddOn *shared.PreviewMarketplaceAvailableAddOn
}
