package operations

import (
	"openapi/pkg/models/shared"
)

var ListPhoneNumberServers = []string{
	"https://proxy.twilio.com",
}

type ListPhoneNumberPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListPhoneNumberQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListPhoneNumberSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListPhoneNumberRequest struct {
	ServerURL   *string
	PathParams  ListPhoneNumberPathParams
	QueryParams ListPhoneNumberQueryParams
	Security    ListPhoneNumberSecurity
}

type ListPhoneNumber200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListPhoneNumber200ApplicationJSONListPhoneNumberResponse struct {
	Meta         *ListPhoneNumber200ApplicationJSONMeta `json:"meta"`
	PhoneNumbers []shared.ProxyV1ServicePhoneNumber     `json:"phone_numbers"`
}

type ListPhoneNumberResponse struct {
	ContentType             string
	ListPhoneNumberResponse *ListPhoneNumber200ApplicationJSONListPhoneNumberResponse
	StatusCode              int64
}
