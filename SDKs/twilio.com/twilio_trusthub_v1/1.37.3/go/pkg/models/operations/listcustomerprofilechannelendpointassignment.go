package operations

import (
	"openapi/pkg/models/shared"
)

var ListCustomerProfileChannelEndpointAssignmentServerList = []string{
	"https://trusthub.twilio.com",
}

type ListCustomerProfileChannelEndpointAssignmentPathParams struct {
	CustomerProfileSid string `pathParam:"style=simple,explode=false,name=CustomerProfileSid"`
}

type ListCustomerProfileChannelEndpointAssignmentQueryParams struct {
	ChannelEndpointSid  *string `queryParam:"style=form,explode=true,name=ChannelEndpointSid"`
	ChannelEndpointSids *string `queryParam:"style=form,explode=true,name=ChannelEndpointSids"`
	PageSize            *int64  `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListCustomerProfileChannelEndpointAssignmentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponse struct {
	Meta    *ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponseMeta `json:"meta,omitempty"`
	Results []shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment                            `json:"results,omitempty"`
}

type ListCustomerProfileChannelEndpointAssignmentRequest struct {
	ServerURL   *string
	PathParams  ListCustomerProfileChannelEndpointAssignmentPathParams
	QueryParams ListCustomerProfileChannelEndpointAssignmentQueryParams
	Security    ListCustomerProfileChannelEndpointAssignmentSecurity
}

type ListCustomerProfileChannelEndpointAssignmentResponse struct {
	ContentType                                          string
	ListCustomerProfileChannelEndpointAssignmentResponse *ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponse
	StatusCode                                           int64
}
