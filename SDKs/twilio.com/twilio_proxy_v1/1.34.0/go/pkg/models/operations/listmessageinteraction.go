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
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListMessageInteraction200ApplicationJSONListMessageInteractionResponse struct {
	Interactions []shared.ProxyV1ServiceSessionParticipantMessageInteraction `json:"interactions"`
	Meta         *ListMessageInteraction200ApplicationJSONMeta               `json:"meta"`
}

type ListMessageInteractionResponse struct {
	ContentType                    string
	ListMessageInteractionResponse *ListMessageInteraction200ApplicationJSONListMessageInteractionResponse
	StatusCode                     int64
}
