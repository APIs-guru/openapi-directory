package operations

import (
	"openapi/pkg/models/shared"
)

var ListDeployedDevicesFleetServerList = []string{
	"https://preview.twilio.com",
}

type ListDeployedDevicesFleetQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListDeployedDevicesFleetSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListDeployedDevicesFleetListDeployedDevicesFleetResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListDeployedDevicesFleetListDeployedDevicesFleetResponse struct {
	Fleets []shared.PreviewDeployedDevicesFleet                          `json:"fleets,omitempty"`
	Meta   *ListDeployedDevicesFleetListDeployedDevicesFleetResponseMeta `json:"meta,omitempty"`
}

type ListDeployedDevicesFleetRequest struct {
	ServerURL   *string
	QueryParams ListDeployedDevicesFleetQueryParams
	Security    ListDeployedDevicesFleetSecurity
}

type ListDeployedDevicesFleetResponse struct {
	ContentType                      string
	ListDeployedDevicesFleetResponse *ListDeployedDevicesFleetListDeployedDevicesFleetResponse
	StatusCode                       int64
}
