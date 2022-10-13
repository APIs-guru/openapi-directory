package operations

import (
	"openapi/pkg/models/shared"
)

var ListDeployedDevicesDeploymentServers = []string{
	"https://preview.twilio.com",
}

type ListDeployedDevicesDeploymentPathParams struct {
	FleetSid string `pathParam:"style=simple,explode=false,name=FleetSid"`
}

type ListDeployedDevicesDeploymentQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListDeployedDevicesDeploymentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListDeployedDevicesDeploymentRequest struct {
	ServerURL   *string
	PathParams  ListDeployedDevicesDeploymentPathParams
	QueryParams ListDeployedDevicesDeploymentQueryParams
	Security    ListDeployedDevicesDeploymentSecurity
}

type ListDeployedDevicesDeployment200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListDeployedDevicesDeployment200ApplicationJSONListDeployedDevicesDeploymentResponse struct {
	Deployments []shared.PreviewDeployedDevicesFleetDeployment       `json:"deployments"`
	Meta        *ListDeployedDevicesDeployment200ApplicationJSONMeta `json:"meta"`
}

type ListDeployedDevicesDeploymentResponse struct {
	ContentType                           string
	ListDeployedDevicesDeploymentResponse *ListDeployedDevicesDeployment200ApplicationJSONListDeployedDevicesDeploymentResponse
	StatusCode                            int64
}
