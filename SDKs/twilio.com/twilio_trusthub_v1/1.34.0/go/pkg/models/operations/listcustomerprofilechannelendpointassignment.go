package operations

import (
	"openapi/pkg/models/shared"
)

var ListCustomerProfileChannelEndpointAssignmentServers = []string{
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

type ListCustomerProfileChannelEndpointAssignmentRequest struct {
	ServerURL   *string
	PathParams  ListCustomerProfileChannelEndpointAssignmentPathParams
	QueryParams ListCustomerProfileChannelEndpointAssignmentQueryParams
	Security    ListCustomerProfileChannelEndpointAssignmentSecurity
}

type ListCustomerProfileChannelEndpointAssignment200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListCustomerProfileChannelEndpointAssignment200ApplicationJSONListCustomerProfileChannelEndpointAssignmentResponse struct {
	Meta    *ListCustomerProfileChannelEndpointAssignment200ApplicationJSONMeta        `json:"meta"`
	Results []shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment `json:"results"`
}

type ListCustomerProfileChannelEndpointAssignmentResponse struct {
	ContentType                                          string
	ListCustomerProfileChannelEndpointAssignmentResponse *ListCustomerProfileChannelEndpointAssignment200ApplicationJSONListCustomerProfileChannelEndpointAssignmentResponse
	StatusCode                                           int64
}
