package operations

import (
"openapi/pkg/models/shared")
var FetchAssetVersionServers = []string{
	"https://serverless.twilio.com",
}

type FetchAssetVersionPathParams struct {
    AssetSid string `pathParam:"style=simple,explode=false,name=AssetSid"`
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchAssetVersionSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchAssetVersionRequest struct {
    ServerURL *string 
    PathParams FetchAssetVersionPathParams 
    Security FetchAssetVersionSecurity 
    
}

type FetchAssetVersionResponse struct {
    ContentType string 
    StatusCode int64 
    ServerlessV1ServiceAssetAssetVersion *shared.ServerlessV1ServiceAssetAssetVersion 
    
}

