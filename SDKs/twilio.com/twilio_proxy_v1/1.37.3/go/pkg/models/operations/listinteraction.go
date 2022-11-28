package operations

import (
	"openapi/pkg/models/shared"
)

var ListInteractionServerList = []string{
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

type ListInteractionListInteractionResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListInteractionListInteractionResponse struct {
	Interactions []shared.ProxyV1ServiceSessionInteraction   `json:"interactions,omitempty"`
	Meta         *ListInteractionListInteractionResponseMeta `json:"meta,omitempty"`
}

type ListInteractionRequest struct {
	ServerURL   *string
	PathParams  ListInteractionPathParams
	QueryParams ListInteractionQueryParams
	Security    ListInteractionSecurity
}

type ListInteractionResponse struct {
	ContentType             string
	ListInteractionResponse *ListInteractionListInteractionResponse
	StatusCode              int64
}
