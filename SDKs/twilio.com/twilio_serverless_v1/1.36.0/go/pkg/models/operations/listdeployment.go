package operations

import (
	"openapi/pkg/models/shared"
)

var ListDeploymentServers = []string{
	"https://serverless.twilio.com",
}

type ListDeploymentPathParams struct {
	EnvironmentSid string `pathParam:"style=simple,explode=false,name=EnvironmentSid"`
	ServiceSid     string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListDeploymentQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListDeploymentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListDeploymentRequest struct {
	ServerURL   *string
	PathParams  ListDeploymentPathParams
	QueryParams ListDeploymentQueryParams
	Security    ListDeploymentSecurity
}

type ListDeployment200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListDeployment200ApplicationJSONListDeploymentResponse struct {
	Deployments []shared.ServerlessV1ServiceEnvironmentDeployment `json:"deployments"`
	Meta        *ListDeployment200ApplicationJSONMeta             `json:"meta"`
}

type ListDeploymentResponse struct {
	ContentType            string
	ListDeploymentResponse *ListDeployment200ApplicationJSONListDeploymentResponse
	StatusCode             int64
}
