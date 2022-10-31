package operations

import (
"openapi/pkg/models/shared")
var ListDeployedDevicesCertificateServers = []string{
	"https://preview.twilio.com",
}

type ListDeployedDevicesCertificatePathParams struct {
    FleetSid string `pathParam:"style=simple,explode=false,name=FleetSid"`
    
}

type ListDeployedDevicesCertificateQueryParams struct {
    DeviceSid *string `queryParam:"style=form,explode=true,name=DeviceSid"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListDeployedDevicesCertificateSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListDeployedDevicesCertificateRequest struct {
    ServerURL *string 
    PathParams ListDeployedDevicesCertificatePathParams 
    QueryParams ListDeployedDevicesCertificateQueryParams 
    Security ListDeployedDevicesCertificateSecurity 
    
}

type ListDeployedDevicesCertificateListDeployedDevicesCertificateResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListDeployedDevicesCertificateListDeployedDevicesCertificateResponse struct {
    Certificates []shared.PreviewDeployedDevicesFleetCertificate `json:"certificates,omitempty"`
    Meta *ListDeployedDevicesCertificateListDeployedDevicesCertificateResponseMeta `json:"meta,omitempty"`
    
}

type ListDeployedDevicesCertificateResponse struct {
    ContentType string 
    ListDeployedDevicesCertificateResponse *ListDeployedDevicesCertificateListDeployedDevicesCertificateResponse 
    StatusCode int64 
    
}

