package operations

import (
	"openapi/pkg/models/shared"
)

var ListSyncSyncMapServerList = []string{
	"https://preview.twilio.com",
}

type ListSyncSyncMapPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListSyncSyncMapQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSyncSyncMapSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSyncSyncMapListSyncSyncMapResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListSyncSyncMapListSyncSyncMapResponse struct {
	Maps []shared.PreviewSyncServiceSyncMap          `json:"maps,omitempty"`
	Meta *ListSyncSyncMapListSyncSyncMapResponseMeta `json:"meta,omitempty"`
}

type ListSyncSyncMapRequest struct {
	ServerURL   *string
	PathParams  ListSyncSyncMapPathParams
	QueryParams ListSyncSyncMapQueryParams
	Security    ListSyncSyncMapSecurity
}

type ListSyncSyncMapResponse struct {
	ContentType             string
	ListSyncSyncMapResponse *ListSyncSyncMapListSyncSyncMapResponse
	StatusCode              int64
}
