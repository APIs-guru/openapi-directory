package operations

import (
"openapi/pkg/models/shared")
var FetchMarketplaceAvailableAddOnExtensionServers = []string{
	"https://preview.twilio.com",
}

type FetchMarketplaceAvailableAddOnExtensionPathParams struct {
    AvailableAddOnSid string `pathParam:"style=simple,explode=false,name=AvailableAddOnSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchMarketplaceAvailableAddOnExtensionSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchMarketplaceAvailableAddOnExtensionRequest struct {
    ServerURL *string 
    PathParams FetchMarketplaceAvailableAddOnExtensionPathParams 
    Security FetchMarketplaceAvailableAddOnExtensionSecurity 
    
}

type FetchMarketplaceAvailableAddOnExtensionResponse struct {
    ContentType string 
    StatusCode int64 
    PreviewMarketplaceAvailableAddOnAvailableAddOnExtension *shared.PreviewMarketplaceAvailableAddOnAvailableAddOnExtension 
    
}

