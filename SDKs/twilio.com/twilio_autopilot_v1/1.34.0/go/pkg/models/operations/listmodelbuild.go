package operations

import (
	"openapi/pkg/models/shared"
)

var ListModelBuildServers = []string{
	"https://autopilot.twilio.com",
}

type ListModelBuildPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
}

type ListModelBuildQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListModelBuildSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListModelBuildRequest struct {
	ServerURL   *string
	PathParams  ListModelBuildPathParams
	QueryParams ListModelBuildQueryParams
	Security    ListModelBuildSecurity
}

type ListModelBuild200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListModelBuild200ApplicationJSONListModelBuildResponse struct {
	Meta        *ListModelBuild200ApplicationJSONMeta   `json:"meta"`
	ModelBuilds []shared.AutopilotV1AssistantModelBuild `json:"model_builds"`
}

type ListModelBuildResponse struct {
	ContentType            string
	ListModelBuildResponse *ListModelBuild200ApplicationJSONListModelBuildResponse
	StatusCode             int64
}
