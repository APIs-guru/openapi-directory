package operations

import (
	"openapi/pkg/models/shared"
)

var ListAlphaSenderServers = []string{
	"https://messaging.twilio.com",
}

type ListAlphaSenderPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListAlphaSenderQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListAlphaSenderSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListAlphaSenderRequest struct {
	ServerURL   *string
	PathParams  ListAlphaSenderPathParams
	QueryParams ListAlphaSenderQueryParams
	Security    ListAlphaSenderSecurity
}

type ListAlphaSenderListAlphaSenderResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListAlphaSenderListAlphaSenderResponse struct {
	AlphaSenders []shared.MessagingV1ServiceAlphaSender      `json:"alpha_senders,omitempty"`
	Meta         *ListAlphaSenderListAlphaSenderResponseMeta `json:"meta,omitempty"`
}

type ListAlphaSenderResponse struct {
	ContentType             string
	ListAlphaSenderResponse *ListAlphaSenderListAlphaSenderResponse
	StatusCode              int64
}
