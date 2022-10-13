package operations

import (
	"openapi/pkg/models/shared"
)

var ListShortCodeServers = []string{
	"https://messaging.twilio.com",
}

type ListShortCodePathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListShortCodeQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListShortCodeSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListShortCodeRequest struct {
	ServerURL   *string
	PathParams  ListShortCodePathParams
	QueryParams ListShortCodeQueryParams
	Security    ListShortCodeSecurity
}

type ListShortCode200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListShortCode200ApplicationJSONListShortCodeResponse struct {
	Meta       *ListShortCode200ApplicationJSONMeta `json:"meta"`
	ShortCodes []shared.MessagingV1ServiceShortCode `json:"short_codes"`
}

type ListShortCodeResponse struct {
	ContentType           string
	ListShortCodeResponse *ListShortCode200ApplicationJSONListShortCodeResponse
	StatusCode            int64
}
