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

type ListAlphaSender200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListAlphaSender200ApplicationJSONListAlphaSenderResponse struct {
	AlphaSenders []shared.MessagingV1ServiceAlphaSender `json:"alpha_senders"`
	Meta         *ListAlphaSender200ApplicationJSONMeta `json:"meta"`
}

type ListAlphaSenderResponse struct {
	ContentType             string
	ListAlphaSenderResponse *ListAlphaSender200ApplicationJSONListAlphaSenderResponse
	StatusCode              int64
}
