package operations

import (
	"openapi/pkg/models/shared"
)

var ListSubscriptionServerList = []string{
	"https://events.twilio.com",
}

type ListSubscriptionQueryParams struct {
	PageSize *int64  `queryParam:"style=form,explode=true,name=PageSize"`
	SinkSid  *string `queryParam:"style=form,explode=true,name=SinkSid"`
}

type ListSubscriptionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSubscriptionListSubscriptionResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListSubscriptionListSubscriptionResponse struct {
	Meta          *ListSubscriptionListSubscriptionResponseMeta `json:"meta,omitempty"`
	Subscriptions []shared.EventsV1Subscription                 `json:"subscriptions,omitempty"`
}

type ListSubscriptionRequest struct {
	ServerURL   *string
	QueryParams ListSubscriptionQueryParams
	Security    ListSubscriptionSecurity
}

type ListSubscriptionResponse struct {
	ContentType              string
	ListSubscriptionResponse *ListSubscriptionListSubscriptionResponse
	StatusCode               int64
}
