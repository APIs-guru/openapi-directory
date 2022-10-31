package operations

import (
	"openapi/pkg/models/shared"
)

var ListUnderstandModelBuildServers = []string{
	"https://preview.twilio.com",
}

type ListUnderstandModelBuildPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
}

type ListUnderstandModelBuildQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListUnderstandModelBuildSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListUnderstandModelBuildRequest struct {
	ServerURL   *string
	PathParams  ListUnderstandModelBuildPathParams
	QueryParams ListUnderstandModelBuildQueryParams
	Security    ListUnderstandModelBuildSecurity
}

type ListUnderstandModelBuildListUnderstandModelBuildResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListUnderstandModelBuildListUnderstandModelBuildResponse struct {
	Meta        *ListUnderstandModelBuildListUnderstandModelBuildResponseMeta `json:"meta,omitempty"`
	ModelBuilds []shared.PreviewUnderstandAssistantModelBuild                 `json:"model_builds,omitempty"`
}

type ListUnderstandModelBuildResponse struct {
	ContentType                      string
	ListUnderstandModelBuildResponse *ListUnderstandModelBuildListUnderstandModelBuildResponse
	StatusCode                       int64
}
