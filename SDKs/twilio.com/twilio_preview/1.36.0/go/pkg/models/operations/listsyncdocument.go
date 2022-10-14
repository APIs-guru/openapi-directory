package operations

import (
	"openapi/pkg/models/shared"
)

var ListSyncDocumentServers = []string{
	"https://preview.twilio.com",
}

type ListSyncDocumentPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListSyncDocumentQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSyncDocumentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSyncDocumentRequest struct {
	ServerURL   *string
	PathParams  ListSyncDocumentPathParams
	QueryParams ListSyncDocumentQueryParams
	Security    ListSyncDocumentSecurity
}

type ListSyncDocument200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListSyncDocument200ApplicationJSONListSyncDocumentResponse struct {
	Documents []shared.PreviewSyncServiceDocument     `json:"documents,omitempty"`
	Meta      *ListSyncDocument200ApplicationJSONMeta `json:"meta,omitempty"`
}

type ListSyncDocumentResponse struct {
	ContentType              string
	ListSyncDocumentResponse *ListSyncDocument200ApplicationJSONListSyncDocumentResponse
	StatusCode               int64
}
