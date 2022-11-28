package operations

import (
	"openapi/pkg/models/shared"
)

var ListCustomerProfileEntityAssignmentServerList = []string{
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

type ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponse struct {
	Meta    *ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponseMeta `json:"meta,omitempty"`
	Results []shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment                   `json:"results,omitempty"`
}

type ListCustomerProfileEntityAssignmentRequest struct {
	ServerURL   *string
	PathParams  ListCustomerProfileEntityAssignmentPathParams
	QueryParams ListCustomerProfileEntityAssignmentQueryParams
	Security    ListCustomerProfileEntityAssignmentSecurity
}

type ListCustomerProfileEntityAssignmentResponse struct {
	ContentType                                 string
	ListCustomerProfileEntityAssignmentResponse *ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponse
	StatusCode                                  int64
}
