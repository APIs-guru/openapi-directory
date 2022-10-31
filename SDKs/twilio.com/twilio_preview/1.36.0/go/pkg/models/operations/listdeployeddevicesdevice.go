package operations

import (
"openapi/pkg/models/shared")
var ListDeployedDevicesDeviceServers = []string{
	"https://preview.twilio.com",
}

type ListDeployedDevicesDevicePathParams struct {
    FleetSid string `pathParam:"style=simple,explode=false,name=FleetSid"`
    
}

type ListDeployedDevicesDeviceQueryParams struct {
    DeploymentSid *string `queryParam:"style=form,explode=true,name=DeploymentSid"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListDeployedDevicesDeviceSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListDeployedDevicesDeviceRequest struct {
    ServerURL *string 
    PathParams ListDeployedDevicesDevicePathParams 
    QueryParams ListDeployedDevicesDeviceQueryParams 
    Security ListDeployedDevicesDeviceSecurity 
    
}

type ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse struct {
    Devices []shared.PreviewDeployedDevicesFleetDevice `json:"devices,omitempty"`
    Meta *ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta `json:"meta,omitempty"`
    
}

type ListDeployedDevicesDeviceResponse struct {
    ContentType string 
    ListDeployedDevicesDeviceResponse *ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse 
    StatusCode int64 
    
}

