package operations

import (
	"openapi/pkg/models/shared"
)

var ListSubscribedEventServers = []string{
	"https://events.twilio.com",
}

type ListSubscribedEventPathParams struct {
	SubscriptionSid string `pathParam:"style=simple,explode=false,name=SubscriptionSid"`
}

type ListSubscribedEventQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSubscribedEventSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSubscribedEventRequest struct {
	ServerURL   *string
	PathParams  ListSubscribedEventPathParams
	QueryParams ListSubscribedEventQueryParams
	Security    ListSubscribedEventSecurity
}

type ListSubscribedEvent200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListSubscribedEvent200ApplicationJSONListSubscribedEventResponse struct {
	Meta  *ListSubscribedEvent200ApplicationJSONMeta   `json:"meta"`
	Types []shared.EventsV1SubscriptionSubscribedEvent `json:"types"`
}

type ListSubscribedEventResponse struct {
	ContentType                 string
	ListSubscribedEventResponse *ListSubscribedEvent200ApplicationJSONListSubscribedEventResponse
	StatusCode                  int64
}
