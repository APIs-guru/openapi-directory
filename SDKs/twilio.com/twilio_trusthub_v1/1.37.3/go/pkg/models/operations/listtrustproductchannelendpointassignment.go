package operations

import (
	"openapi/pkg/models/shared"
)

var ListTrustProductChannelEndpointAssignmentServerList = []string{
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

type ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponse struct {
	Meta    *ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponseMeta `json:"meta,omitempty"`
	Results []shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment                            `json:"results,omitempty"`
}

type ListTrustProductChannelEndpointAssignmentRequest struct {
	ServerURL   *string
	PathParams  ListTrustProductChannelEndpointAssignmentPathParams
	QueryParams ListTrustProductChannelEndpointAssignmentQueryParams
	Security    ListTrustProductChannelEndpointAssignmentSecurity
}

type ListTrustProductChannelEndpointAssignmentResponse struct {
	ContentType                                       string
	ListTrustProductChannelEndpointAssignmentResponse *ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponse
	StatusCode                                        int64
}
