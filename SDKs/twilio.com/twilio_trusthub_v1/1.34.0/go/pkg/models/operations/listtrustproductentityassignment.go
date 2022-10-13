package operations

import (
	"openapi/pkg/models/shared"
)

var ListTrustProductEntityAssignmentServers = []string{
	"https://trusthub.twilio.com",
}

type ListTrustProductEntityAssignmentPathParams struct {
	TrustProductSid string `pathParam:"style=simple,explode=false,name=TrustProductSid"`
}

type ListTrustProductEntityAssignmentQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListTrustProductEntityAssignmentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListTrustProductEntityAssignmentRequest struct {
	ServerURL   *string
	PathParams  ListTrustProductEntityAssignmentPathParams
	QueryParams ListTrustProductEntityAssignmentQueryParams
	Security    ListTrustProductEntityAssignmentSecurity
}

type ListTrustProductEntityAssignment200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListTrustProductEntityAssignment200ApplicationJSONListTrustProductEntityAssignmentResponse struct {
	Meta    *ListTrustProductEntityAssignment200ApplicationJSONMeta     `json:"meta"`
	Results []shared.TrusthubV1TrustProductTrustProductEntityAssignment `json:"results"`
}

type ListTrustProductEntityAssignmentResponse struct {
	ContentType                              string
	ListTrustProductEntityAssignmentResponse *ListTrustProductEntityAssignment200ApplicationJSONListTrustProductEntityAssignmentResponse
	StatusCode                               int64
}
