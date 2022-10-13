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
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListSyncDocument200ApplicationJSONListSyncDocumentResponse struct {
	Documents []shared.PreviewSyncServiceDocument     `json:"documents"`
	Meta      *ListSyncDocument200ApplicationJSONMeta `json:"meta"`
}

type ListSyncDocumentResponse struct {
	ContentType              string
	ListSyncDocumentResponse *ListSyncDocument200ApplicationJSONListSyncDocumentResponse
	StatusCode               int64
}
