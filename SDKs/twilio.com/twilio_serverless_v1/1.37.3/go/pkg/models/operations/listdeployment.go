package operations

import (
	"openapi/pkg/models/shared"
)

var ListDeploymentServerList = []string{
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

type ListDeploymentListDeploymentResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListDeploymentListDeploymentResponse struct {
	Deployments []shared.ServerlessV1ServiceEnvironmentDeployment `json:"deployments,omitempty"`
	Meta        *ListDeploymentListDeploymentResponseMeta         `json:"meta,omitempty"`
}

type ListDeploymentRequest struct {
	ServerURL   *string
	PathParams  ListDeploymentPathParams
	QueryParams ListDeploymentQueryParams
	Security    ListDeploymentSecurity
}

type ListDeploymentResponse struct {
	ContentType            string
	ListDeploymentResponse *ListDeploymentListDeploymentResponse
	StatusCode             int64
}
