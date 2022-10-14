package operations

import (
	"openapi/pkg/models/shared"
)

var ListMessageInteractionServers = []string{
	"https://proxy.twilio.com",
}

type ListMessageInteractionPathParams struct {
	ParticipantSid string `pathParam:"style=simple,explode=false,name=ParticipantSid"`
	ServiceSid     string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	SessionSid     string `pathParam:"style=simple,explode=false,name=SessionSid"`
}

type ListMessageInteractionQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListMessageInteractionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListMessageInteractionRequest struct {
	ServerURL   *string
	PathParams  ListMessageInteractionPathParams
	QueryParams ListMessageInteractionQueryParams
	Security    ListMessageInteractionSecurity
}

type ListMessageInteraction200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListMessageInteraction200ApplicationJSONListMessageInteractionResponse struct {
	Interactions []shared.ProxyV1ServiceSessionParticipantMessageInteraction `json:"interactions,omitempty"`
	Meta         *ListMessageInteraction200ApplicationJSONMeta               `json:"meta,omitempty"`
}

type ListMessageInteractionResponse struct {
	ContentType                    string
	ListMessageInteractionResponse *ListMessageInteraction200ApplicationJSONListMessageInteractionResponse
	StatusCode                     int64
}
