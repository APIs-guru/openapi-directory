package operations

import (
	"openapi/pkg/models/shared"
)

var ListDeviceServers = []string{
	"https://microvisor.twilio.com",
}

type ListDeviceQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListDeviceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListDeviceRequest struct {
	ServerURL   *string
	QueryParams ListDeviceQueryParams
	Security    ListDeviceSecurity
}

type ListDevice200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListDevice200ApplicationJSONListDeviceResponse struct {
	Devices []shared.MicrovisorV1Device       `json:"devices"`
	Meta    *ListDevice200ApplicationJSONMeta `json:"meta"`
}

type ListDeviceResponse struct {
	ContentType        string
	ListDeviceResponse *ListDevice200ApplicationJSONListDeviceResponse
	StatusCode         int64
}
