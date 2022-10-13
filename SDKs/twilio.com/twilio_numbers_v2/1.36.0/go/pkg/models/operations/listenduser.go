package operations

import (
	"openapi/pkg/models/shared"
)

var ListEndUserServers = []string{
	"https://numbers.twilio.com",
}

type ListEndUserQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListEndUserSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListEndUserRequest struct {
	ServerURL   *string
	QueryParams ListEndUserQueryParams
	Security    ListEndUserSecurity
}

type ListEndUser200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListEndUser200ApplicationJSONListEndUserResponse struct {
	Meta    *ListEndUser200ApplicationJSONMeta            `json:"meta"`
	Results []shared.NumbersV2RegulatoryComplianceEndUser `json:"results"`
}

type ListEndUserResponse struct {
	ContentType         string
	ListEndUserResponse *ListEndUser200ApplicationJSONListEndUserResponse
	StatusCode          int64
}
