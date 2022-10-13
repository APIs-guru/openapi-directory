package operations

import (
	"openapi/pkg/models/shared"
)

var ListInteractionServers = []string{
	"https://proxy.twilio.com",
}

type ListInteractionPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	SessionSid string `pathParam:"style=simple,explode=false,name=SessionSid"`
}

type ListInteractionQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListInteractionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListInteractionRequest struct {
	ServerURL   *string
	PathParams  ListInteractionPathParams
	QueryParams ListInteractionQueryParams
	Security    ListInteractionSecurity
}

type ListInteraction200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListInteraction200ApplicationJSONListInteractionResponse struct {
	Interactions []shared.ProxyV1ServiceSessionInteraction `json:"interactions"`
	Meta         *ListInteraction200ApplicationJSONMeta    `json:"meta"`
}

type ListInteractionResponse struct {
	ContentType             string
	ListInteractionResponse *ListInteraction200ApplicationJSONListInteractionResponse
	StatusCode              int64
}
