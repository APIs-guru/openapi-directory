package operations

import (
"openapi/pkg/models/shared")
var FetchExportConfigurationServers = []string{
	"https://bulkexports.twilio.com",
}

type FetchExportConfigurationPathParams struct {
    ResourceType string `pathParam:"style=simple,explode=false,name=ResourceType"`
    
}

type FetchExportConfigurationSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchExportConfigurationRequest struct {
    ServerURL *string 
    PathParams FetchExportConfigurationPathParams 
    Security FetchExportConfigurationSecurity 
    
}

type FetchExportConfigurationResponse struct {
    ContentType string 
    StatusCode int64 
    BulkexportsV1ExportConfiguration *shared.BulkexportsV1ExportConfiguration 
    
}

