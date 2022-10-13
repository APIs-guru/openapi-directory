package operations

import (
	"openapi/pkg/models/shared"
)

var ListDeployedDevicesCertificateServers = []string{
	"https://preview.twilio.com",
}

type ListDeployedDevicesCertificatePathParams struct {
	FleetSid string `pathParam:"style=simple,explode=false,name=FleetSid"`
}

type ListDeployedDevicesCertificateQueryParams struct {
	DeviceSid *string `queryParam:"style=form,explode=true,name=DeviceSid"`
	PageSize  *int64  `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListDeployedDevicesCertificateSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListDeployedDevicesCertificateRequest struct {
	ServerURL   *string
	PathParams  ListDeployedDevicesCertificatePathParams
	QueryParams ListDeployedDevicesCertificateQueryParams
	Security    ListDeployedDevicesCertificateSecurity
}

type ListDeployedDevicesCertificate200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListDeployedDevicesCertificate200ApplicationJSONListDeployedDevicesCertificateResponse struct {
	Certificates []shared.PreviewDeployedDevicesFleetCertificate       `json:"certificates"`
	Meta         *ListDeployedDevicesCertificate200ApplicationJSONMeta `json:"meta"`
}

type ListDeployedDevicesCertificateResponse struct {
	ContentType                            string
	ListDeployedDevicesCertificateResponse *ListDeployedDevicesCertificate200ApplicationJSONListDeployedDevicesCertificateResponse
	StatusCode                             int64
}
