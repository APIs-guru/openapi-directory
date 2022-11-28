package operations

import (
	"openapi/pkg/models/shared"
)

var ListCustomerProfileEvaluationServerList = []string{
	"https://trusthub.twilio.com",
}

type ListCustomerProfileEvaluationPathParams struct {
	CustomerProfileSid string `pathParam:"style=simple,explode=false,name=CustomerProfileSid"`
}

type ListCustomerProfileEvaluationQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListCustomerProfileEvaluationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListCustomerProfileEvaluationListCustomerProfileEvaluationResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListCustomerProfileEvaluationListCustomerProfileEvaluationResponse struct {
	Meta    *ListCustomerProfileEvaluationListCustomerProfileEvaluationResponseMeta `json:"meta,omitempty"`
	Results []shared.TrusthubV1CustomerProfileCustomerProfileEvaluation             `json:"results,omitempty"`
}

type ListCustomerProfileEvaluationRequest struct {
	ServerURL   *string
	PathParams  ListCustomerProfileEvaluationPathParams
	QueryParams ListCustomerProfileEvaluationQueryParams
	Security    ListCustomerProfileEvaluationSecurity
}

type ListCustomerProfileEvaluationResponse struct {
	ContentType                           string
	ListCustomerProfileEvaluationResponse *ListCustomerProfileEvaluationListCustomerProfileEvaluationResponse
	StatusCode                            int64
}
