package operations

import (
	"openapi/pkg/models/shared"
)

var ListTrustProductEntityAssignmentServerList = []string{
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

type ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponse struct {
	Meta    *ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponseMeta `json:"meta,omitempty"`
	Results []shared.TrusthubV1TrustProductTrustProductEntityAssignment                   `json:"results,omitempty"`
}

type ListTrustProductEntityAssignmentRequest struct {
	ServerURL   *string
	PathParams  ListTrustProductEntityAssignmentPathParams
	QueryParams ListTrustProductEntityAssignmentQueryParams
	Security    ListTrustProductEntityAssignmentSecurity
}

type ListTrustProductEntityAssignmentResponse struct {
	ContentType                              string
	ListTrustProductEntityAssignmentResponse *ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponse
	StatusCode                               int64
}
