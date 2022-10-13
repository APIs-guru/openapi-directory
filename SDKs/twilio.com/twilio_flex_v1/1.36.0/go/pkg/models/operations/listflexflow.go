package operations

import (
	"openapi/pkg/models/shared"
)

var ListFlexFlowServers = []string{
	"https://flex-api.twilio.com",
}

type ListFlexFlowQueryParams struct {
	FriendlyName *string `queryParam:"style=form,explode=true,name=FriendlyName"`
	PageSize     *int64  `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListFlexFlowSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListFlexFlowRequest struct {
	ServerURL   *string
	QueryParams ListFlexFlowQueryParams
	Security    ListFlexFlowSecurity
}

type ListFlexFlow200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListFlexFlow200ApplicationJSONListFlexFlowResponse struct {
	FlexFlows []shared.FlexV1FlexFlow             `json:"flex_flows"`
	Meta      *ListFlexFlow200ApplicationJSONMeta `json:"meta"`
}

type ListFlexFlowResponse struct {
	ContentType          string
	ListFlexFlowResponse *ListFlexFlow200ApplicationJSONListFlexFlowResponse
	StatusCode           int64
}
