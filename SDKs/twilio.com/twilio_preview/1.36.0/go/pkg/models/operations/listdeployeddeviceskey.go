package operations

import (
"openapi/pkg/models/shared")
var ListDeployedDevicesKeyServers = []string{
	"https://preview.twilio.com",
}

type ListDeployedDevicesKeyPathParams struct {
    FleetSid string `pathParam:"style=simple,explode=false,name=FleetSid"`
    
}

type ListDeployedDevicesKeyQueryParams struct {
    DeviceSid *string `queryParam:"style=form,explode=true,name=DeviceSid"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListDeployedDevicesKeySecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListDeployedDevicesKeyRequest struct {
    ServerURL *string 
    PathParams ListDeployedDevicesKeyPathParams 
    QueryParams ListDeployedDevicesKeyQueryParams 
    Security ListDeployedDevicesKeySecurity 
    
}

type ListDeployedDevicesKeyListDeployedDevicesKeyResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListDeployedDevicesKeyListDeployedDevicesKeyResponse struct {
    Keys []shared.PreviewDeployedDevicesFleetKey `json:"keys,omitempty"`
    Meta *ListDeployedDevicesKeyListDeployedDevicesKeyResponseMeta `json:"meta,omitempty"`
    
}

type ListDeployedDevicesKeyResponse struct {
    ContentType string 
    ListDeployedDevicesKeyResponse *ListDeployedDevicesKeyListDeployedDevicesKeyResponse 
    StatusCode int64 
    
}

