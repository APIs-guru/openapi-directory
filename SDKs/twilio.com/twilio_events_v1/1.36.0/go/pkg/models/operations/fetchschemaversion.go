package operations

import (
"openapi/pkg/models/shared")
var FetchSchemaVersionServers = []string{
	"https://events.twilio.com",
}

type FetchSchemaVersionPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=Id"`
    SchemaVersion int64 `pathParam:"style=simple,explode=false,name=SchemaVersion"`
    
}

type FetchSchemaVersionSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchSchemaVersionRequest struct {
    ServerURL *string 
    PathParams FetchSchemaVersionPathParams 
    Security FetchSchemaVersionSecurity 
    
}

type FetchSchemaVersionResponse struct {
    ContentType string 
    StatusCode int64 
    EventsV1SchemaSchemaVersion *shared.EventsV1SchemaSchemaVersion 
    
}

