package operations

import (
	"openapi/pkg/models/shared"
)

var ListCustomerProfileEntityAssignmentServers = []string{
	"https://trusthub.twilio.com",
}

type ListCustomerProfileEntityAssignmentPathParams struct {
	CustomerProfileSid string `pathParam:"style=simple,explode=false,name=CustomerProfileSid"`
}

type ListCustomerProfileEntityAssignmentQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListCustomerProfileEntityAssignmentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListCustomerProfileEntityAssignmentRequest struct {
	ServerURL   *string
	PathParams  ListCustomerProfileEntityAssignmentPathParams
	QueryParams ListCustomerProfileEntityAssignmentQueryParams
	Security    ListCustomerProfileEntityAssignmentSecurity
}

type ListCustomerProfileEntityAssignment200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListCustomerProfileEntityAssignment200ApplicationJSONListCustomerProfileEntityAssignmentResponse struct {
	Meta    *ListCustomerProfileEntityAssignment200ApplicationJSONMeta        `json:"meta"`
	Results []shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment `json:"results"`
}

type ListCustomerProfileEntityAssignmentResponse struct {
	ContentType                                 string
	ListCustomerProfileEntityAssignmentResponse *ListCustomerProfileEntityAssignment200ApplicationJSONListCustomerProfileEntityAssignmentResponse
	StatusCode                                  int64
}
