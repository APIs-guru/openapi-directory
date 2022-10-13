package operations

import (
	"openapi/pkg/models/shared"
)

var ListUsAppToPersonServers = []string{
	"https://messaging.twilio.com",
}

type ListUsAppToPersonPathParams struct {
	MessagingServiceSid string `pathParam:"style=simple,explode=false,name=MessagingServiceSid"`
}

type ListUsAppToPersonQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListUsAppToPersonSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListUsAppToPersonRequest struct {
	ServerURL   *string
	PathParams  ListUsAppToPersonPathParams
	QueryParams ListUsAppToPersonQueryParams
	Security    ListUsAppToPersonSecurity
}

type ListUsAppToPerson200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListUsAppToPerson200ApplicationJSONListUsAppToPersonResponse struct {
	Compliance []shared.MessagingV1ServiceUsAppToPerson `json:"compliance"`
	Meta       *ListUsAppToPerson200ApplicationJSONMeta `json:"meta"`
}

type ListUsAppToPersonResponse struct {
	ContentType               string
	ListUsAppToPersonResponse *ListUsAppToPerson200ApplicationJSONListUsAppToPersonResponse
	StatusCode                int64
}
