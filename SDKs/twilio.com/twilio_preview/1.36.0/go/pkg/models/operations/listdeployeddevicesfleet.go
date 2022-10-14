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
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListDeployedDevicesFleet200ApplicationJSONListDeployedDevicesFleetResponse struct {
	Fleets []shared.PreviewDeployedDevicesFleet            `json:"fleets,omitempty"`
	Meta   *ListDeployedDevicesFleet200ApplicationJSONMeta `json:"meta,omitempty"`
}

type ListDeployedDevicesFleetResponse struct {
	ContentType                      string
	ListDeployedDevicesFleetResponse *ListDeployedDevicesFleet200ApplicationJSONListDeployedDevicesFleetResponse
	StatusCode                       int64
}
