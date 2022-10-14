package operations

import (
	"openapi/pkg/models/shared"
)

var ListItemAssignmentServers = []string{
	"https://numbers.twilio.com",
}

type ListItemAssignmentPathParams struct {
	BundleSid string `pathParam:"style=simple,explode=false,name=BundleSid"`
}

type ListItemAssignmentQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListItemAssignmentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListItemAssignmentRequest struct {
	ServerURL   *string
	PathParams  ListItemAssignmentPathParams
	QueryParams ListItemAssignmentQueryParams
	Security    ListItemAssignmentSecurity
}

type ListItemAssignment200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListItemAssignment200ApplicationJSONListItemAssignmentResponse struct {
	Meta    *ListItemAssignment200ApplicationJSONMeta                  `json:"meta,omitempty"`
	Results []shared.NumbersV2RegulatoryComplianceBundleItemAssignment `json:"results,omitempty"`
}

type ListItemAssignmentResponse struct {
	ContentType                string
	ListItemAssignmentResponse *ListItemAssignment200ApplicationJSONListItemAssignmentResponse
	StatusCode                 int64
}
