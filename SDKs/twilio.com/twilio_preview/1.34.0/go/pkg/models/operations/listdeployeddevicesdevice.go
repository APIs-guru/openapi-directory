package operations

import (
	"openapi/pkg/models/shared"
)

var ListDeployedDevicesDeviceServers = []string{
	"https://preview.twilio.com",
}

type ListDeployedDevicesDevicePathParams struct {
	FleetSid string `pathParam:"style=simple,explode=false,name=FleetSid"`
}

type ListDeployedDevicesDeviceQueryParams struct {
	DeploymentSid *string `queryParam:"style=form,explode=true,name=DeploymentSid"`
	PageSize      *int64  `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListDeployedDevicesDeviceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListDeployedDevicesDeviceRequest struct {
	ServerURL   *string
	PathParams  ListDeployedDevicesDevicePathParams
	QueryParams ListDeployedDevicesDeviceQueryParams
	Security    ListDeployedDevicesDeviceSecurity
}

type ListDeployedDevicesDevice200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListDeployedDevicesDevice200ApplicationJSONListDeployedDevicesDeviceResponse struct {
	Devices []shared.PreviewDeployedDevicesFleetDevice       `json:"devices"`
	Meta    *ListDeployedDevicesDevice200ApplicationJSONMeta `json:"meta"`
}

type ListDeployedDevicesDeviceResponse struct {
	ContentType                       string
	ListDeployedDevicesDeviceResponse *ListDeployedDevicesDevice200ApplicationJSONListDeployedDevicesDeviceResponse
	StatusCode                        int64
}
