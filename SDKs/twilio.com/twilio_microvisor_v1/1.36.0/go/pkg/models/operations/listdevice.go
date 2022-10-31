package operations

import (
"openapi/pkg/models/shared")
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
    ServerURL *string 
    QueryParams ListDeviceQueryParams 
    Security ListDeviceSecurity 
    
}

type ListDeviceListDeviceResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListDeviceListDeviceResponse struct {
    Devices []shared.MicrovisorV1Device `json:"devices,omitempty"`
    Meta *ListDeviceListDeviceResponseMeta `json:"meta,omitempty"`
    
}

type ListDeviceResponse struct {
    ContentType string 
    ListDeviceResponse *ListDeviceListDeviceResponse 
    StatusCode int64 
    
}

