package operations

import (
	"openapi/pkg/models/shared"
)

var ListSchemaVersionServers = []string{
	"https://events.twilio.com",
}

type ListSchemaVersionPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=Id"`
}

type ListSchemaVersionQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSchemaVersionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSchemaVersionRequest struct {
	ServerURL   *string
	PathParams  ListSchemaVersionPathParams
	QueryParams ListSchemaVersionQueryParams
	Security    ListSchemaVersionSecurity
}

type ListSchemaVersion200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListSchemaVersion200ApplicationJSONListSchemaVersionResponse struct {
	Meta           *ListSchemaVersion200ApplicationJSONMeta `json:"meta"`
	SchemaVersions []shared.EventsV1SchemaSchemaVersion     `json:"schema_versions"`
}

type ListSchemaVersionResponse struct {
	ContentType               string
	ListSchemaVersionResponse *ListSchemaVersion200ApplicationJSONListSchemaVersionResponse
	StatusCode                int64
}
