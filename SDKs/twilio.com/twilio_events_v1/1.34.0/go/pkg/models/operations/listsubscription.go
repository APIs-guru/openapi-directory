package operations

import (
	"openapi/pkg/models/shared"
)

var ListSubscriptionServers = []string{
	"https://events.twilio.com",
}

type ListSubscriptionQueryParams struct {
	PageSize *int64  `queryParam:"style=form,explode=true,name=PageSize"`
	SinkSid  *string `queryParam:"style=form,explode=true,name=SinkSid"`
}

type ListSubscriptionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSubscriptionRequest struct {
	ServerURL   *string
	QueryParams ListSubscriptionQueryParams
	Security    ListSubscriptionSecurity
}

type ListSubscription200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListSubscription200ApplicationJSONListSubscriptionResponse struct {
	Meta          *ListSubscription200ApplicationJSONMeta `json:"meta"`
	Subscriptions []shared.EventsV1Subscription           `json:"subscriptions"`
}

type ListSubscriptionResponse struct {
	ContentType              string
	ListSubscriptionResponse *ListSubscription200ApplicationJSONListSubscriptionResponse
	StatusCode               int64
}
