package operations

import (
	"openapi/pkg/models/shared"
)

var ListSyncMapServerList = []string{
	"https://sync.twilio.com",
}

type ListSyncMapPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListSyncMapQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSyncMapSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSyncMapListSyncMapResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListSyncMapListSyncMapResponse struct {
	Maps []shared.SyncV1ServiceSyncMap       `json:"maps,omitempty"`
	Meta *ListSyncMapListSyncMapResponseMeta `json:"meta,omitempty"`
}

type ListSyncMapRequest struct {
	ServerURL   *string
	PathParams  ListSyncMapPathParams
	QueryParams ListSyncMapQueryParams
	Security    ListSyncMapSecurity
}

type ListSyncMapResponse struct {
	ContentType         string
	ListSyncMapResponse *ListSyncMapListSyncMapResponse
	StatusCode          int64
}
