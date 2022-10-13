package operations

import (
	"openapi/pkg/models/shared"
)

var ListDeployedDevicesFleetServers = []string{
	"https://preview.twilio.com",
}

type ListDeployedDevicesFleetQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListDeployedDevicesFleetSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListDeployedDevicesFleetRequest struct {
	ServerURL   *string
	QueryParams ListDeployedDevicesFleetQueryParams
	Security    ListDeployedDevicesFleetSecurity
}

type ListDeployedDevicesFleet200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListDeployedDevicesFleet200ApplicationJSONListDeployedDevicesFleetResponse struct {
	Fleets []shared.PreviewDeployedDevicesFleet            `json:"fleets"`
	Meta   *ListDeployedDevicesFleet200ApplicationJSONMeta `json:"meta"`
}

type ListDeployedDevicesFleetResponse struct {
	ContentType                      string
	ListDeployedDevicesFleetResponse *ListDeployedDevicesFleet200ApplicationJSONListDeployedDevicesFleetResponse
	StatusCode                       int64
}
