package operations

import (
	"openapi/pkg/models/shared"
)

var ListDocumentServers = []string{
	"https://sync.twilio.com",
}

type ListDocumentPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListDocumentQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListDocumentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListDocumentRequest struct {
	ServerURL   *string
	PathParams  ListDocumentPathParams
	QueryParams ListDocumentQueryParams
	Security    ListDocumentSecurity
}

type ListDocument200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListDocument200ApplicationJSONListDocumentResponse struct {
	Documents []shared.SyncV1ServiceDocument      `json:"documents"`
	Meta      *ListDocument200ApplicationJSONMeta `json:"meta"`
}

type ListDocumentResponse struct {
	ContentType          string
	ListDocumentResponse *ListDocument200ApplicationJSONListDocumentResponse
	StatusCode           int64
}
