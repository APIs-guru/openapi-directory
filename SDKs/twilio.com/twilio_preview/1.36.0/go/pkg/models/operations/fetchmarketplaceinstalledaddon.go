package operations

import (
"openapi/pkg/models/shared")
var FetchMarketplaceInstalledAddOnServers = []string{
	"https://preview.twilio.com",
}

type FetchMarketplaceInstalledAddOnPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchMarketplaceInstalledAddOnSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchMarketplaceInstalledAddOnRequest struct {
    ServerURL *string 
    PathParams FetchMarketplaceInstalledAddOnPathParams 
    Security FetchMarketplaceInstalledAddOnSecurity 
    
}

type FetchMarketplaceInstalledAddOnResponse struct {
    ContentType string 
    StatusCode int64 
    PreviewMarketplaceInstalledAddOn *shared.PreviewMarketplaceInstalledAddOn 
    
}

