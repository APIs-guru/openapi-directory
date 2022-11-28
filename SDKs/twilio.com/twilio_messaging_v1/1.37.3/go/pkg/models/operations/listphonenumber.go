package operations

import (
	"openapi/pkg/models/shared"
)

var ListPhoneNumberServerList = []string{
	"https://messaging.twilio.com",
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

type ListPhoneNumberListPhoneNumberResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListPhoneNumberListPhoneNumberResponse struct {
	Meta         *ListPhoneNumberListPhoneNumberResponseMeta `json:"meta,omitempty"`
	PhoneNumbers []shared.MessagingV1ServicePhoneNumber      `json:"phone_numbers,omitempty"`
}

type ListPhoneNumberRequest struct {
	ServerURL   *string
	PathParams  ListPhoneNumberPathParams
	QueryParams ListPhoneNumberQueryParams
	Security    ListPhoneNumberSecurity
}

type ListPhoneNumberResponse struct {
	ContentType             string
	ListPhoneNumberResponse *ListPhoneNumberListPhoneNumberResponse
	StatusCode              int64
}
