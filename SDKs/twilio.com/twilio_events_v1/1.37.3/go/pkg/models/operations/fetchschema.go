package operations

import (
	"openapi/pkg/models/shared"
)

var FetchSchemaServerList = []string{
	"https://events.twilio.com",
}

type FetchSchemaPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=Id"`
}

type FetchSchemaSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchSchemaRequest struct {
	ServerURL  *string
	PathParams FetchSchemaPathParams
	Security   FetchSchemaSecurity
}

type FetchSchemaResponse struct {
	ContentType    string
	StatusCode     int64
	EventsV1Schema *shared.EventsV1Schema
}
