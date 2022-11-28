package operations

import (
	"openapi/pkg/models/shared"
)

var ListFlowServerList = []string{
	"https://studio.twilio.com",
}

type ListFlowQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListFlowSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListFlowListFlowResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListFlowListFlowResponse struct {
	Flows []shared.StudioV2Flow         `json:"flows,omitempty"`
	Meta  *ListFlowListFlowResponseMeta `json:"meta,omitempty"`
}

type ListFlowRequest struct {
	ServerURL   *string
	QueryParams ListFlowQueryParams
	Security    ListFlowSecurity
}

type ListFlowResponse struct {
	ContentType      string
	ListFlowResponse *ListFlowListFlowResponse
	StatusCode       int64
}
