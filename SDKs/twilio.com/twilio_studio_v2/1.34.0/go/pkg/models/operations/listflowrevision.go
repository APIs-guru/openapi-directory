package operations

import (
	"openapi/pkg/models/shared"
)

var ListFlowRevisionServers = []string{
	"https://studio.twilio.com",
}

type ListFlowRevisionPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type ListFlowRevisionQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListFlowRevisionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListFlowRevisionRequest struct {
	ServerURL   *string
	PathParams  ListFlowRevisionPathParams
	QueryParams ListFlowRevisionQueryParams
	Security    ListFlowRevisionSecurity
}

type ListFlowRevision200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListFlowRevision200ApplicationJSONListFlowRevisionResponse struct {
	Meta      *ListFlowRevision200ApplicationJSONMeta `json:"meta"`
	Revisions []shared.StudioV2FlowFlowRevision       `json:"revisions"`
}

type ListFlowRevisionResponse struct {
	ContentType              string
	ListFlowRevisionResponse *ListFlowRevision200ApplicationJSONListFlowRevisionResponse
	StatusCode               int64
}
