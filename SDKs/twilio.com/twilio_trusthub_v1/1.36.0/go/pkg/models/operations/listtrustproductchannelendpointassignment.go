package operations

import (
	"openapi/pkg/models/shared"
)

var ListTrustProductChannelEndpointAssignmentServers = []string{
	"https://trusthub.twilio.com",
}

type ListTrustProductChannelEndpointAssignmentPathParams struct {
	TrustProductSid string `pathParam:"style=simple,explode=false,name=TrustProductSid"`
}

type ListTrustProductChannelEndpointAssignmentQueryParams struct {
	ChannelEndpointSid  *string `queryParam:"style=form,explode=true,name=ChannelEndpointSid"`
	ChannelEndpointSids *string `queryParam:"style=form,explode=true,name=ChannelEndpointSids"`
	PageSize            *int64  `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListTrustProductChannelEndpointAssignmentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListTrustProductChannelEndpointAssignmentRequest struct {
	ServerURL   *string
	PathParams  ListTrustProductChannelEndpointAssignmentPathParams
	QueryParams ListTrustProductChannelEndpointAssignmentQueryParams
	Security    ListTrustProductChannelEndpointAssignmentSecurity
}

type ListTrustProductChannelEndpointAssignment200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListTrustProductChannelEndpointAssignment200ApplicationJSONListTrustProductChannelEndpointAssignmentResponse struct {
	Meta    *ListTrustProductChannelEndpointAssignment200ApplicationJSONMeta     `json:"meta"`
	Results []shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment `json:"results"`
}

type ListTrustProductChannelEndpointAssignmentResponse struct {
	ContentType                                       string
	ListTrustProductChannelEndpointAssignmentResponse *ListTrustProductChannelEndpointAssignment200ApplicationJSONListTrustProductChannelEndpointAssignmentResponse
	StatusCode                                        int64
}
