package operations

import (
	"openapi/pkg/models/shared"
)

var ListSyncServiceServers = []string{
	"https://preview.twilio.com",
}

type ListSyncServiceQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSyncServiceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSyncServiceRequest struct {
	ServerURL   *string
	QueryParams ListSyncServiceQueryParams
	Security    ListSyncServiceSecurity
}

type ListSyncServiceListSyncServiceResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListSyncServiceListSyncServiceResponse struct {
	Meta     *ListSyncServiceListSyncServiceResponseMeta `json:"meta,omitempty"`
	Services []shared.PreviewSyncService                 `json:"services,omitempty"`
}

type ListSyncServiceResponse struct {
	ContentType             string
	ListSyncServiceResponse *ListSyncServiceListSyncServiceResponse
	StatusCode              int64
}
