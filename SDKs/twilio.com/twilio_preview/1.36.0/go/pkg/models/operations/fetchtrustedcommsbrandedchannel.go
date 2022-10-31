package operations

import (
"openapi/pkg/models/shared")
var FetchTrustedCommsBrandedChannelServers = []string{
	"https://preview.twilio.com",
}

type FetchTrustedCommsBrandedChannelPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchTrustedCommsBrandedChannelSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchTrustedCommsBrandedChannelRequest struct {
    ServerURL *string 
    PathParams FetchTrustedCommsBrandedChannelPathParams 
    Security FetchTrustedCommsBrandedChannelSecurity 
    
}

type FetchTrustedCommsBrandedChannelResponse struct {
    ContentType string 
    StatusCode int64 
    PreviewTrustedCommsBrandedChannel *shared.PreviewTrustedCommsBrandedChannel 
    
}

