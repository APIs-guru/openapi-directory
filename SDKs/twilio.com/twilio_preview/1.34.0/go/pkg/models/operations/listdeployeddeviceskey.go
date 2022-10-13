package operations

import (
	"openapi/pkg/models/shared"
)

var ListDeployedDevicesKeyServers = []string{
	"https://preview.twilio.com",
}

type ListDeployedDevicesKeyPathParams struct {
	FleetSid string `pathParam:"style=simple,explode=false,name=FleetSid"`
}

type ListDeployedDevicesKeyQueryParams struct {
	DeviceSid *string `queryParam:"style=form,explode=true,name=DeviceSid"`
	PageSize  *int64  `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListDeployedDevicesKeySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListDeployedDevicesKeyRequest struct {
	ServerURL   *string
	PathParams  ListDeployedDevicesKeyPathParams
	QueryParams ListDeployedDevicesKeyQueryParams
	Security    ListDeployedDevicesKeySecurity
}

type ListDeployedDevicesKey200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListDeployedDevicesKey200ApplicationJSONListDeployedDevicesKeyResponse struct {
	Keys []shared.PreviewDeployedDevicesFleetKey       `json:"keys"`
	Meta *ListDeployedDevicesKey200ApplicationJSONMeta `json:"meta"`
}

type ListDeployedDevicesKeyResponse struct {
	ContentType                    string
	ListDeployedDevicesKeyResponse *ListDeployedDevicesKey200ApplicationJSONListDeployedDevicesKeyResponse
	StatusCode                     int64
}
