package operations

import (
"openapi/pkg/models/shared")
var ListDeployedDevicesDeploymentServers = []string{
	"https://preview.twilio.com",
}

type ListDeployedDevicesDeploymentPathParams struct {
    FleetSid string `pathParam:"style=simple,explode=false,name=FleetSid"`
    
}

type ListDeployedDevicesDeploymentQueryParams struct {
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListDeployedDevicesDeploymentSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListDeployedDevicesDeploymentRequest struct {
    ServerURL *string 
    PathParams ListDeployedDevicesDeploymentPathParams 
    QueryParams ListDeployedDevicesDeploymentQueryParams 
    Security ListDeployedDevicesDeploymentSecurity 
    
}

type ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponse struct {
    Deployments []shared.PreviewDeployedDevicesFleetDeployment `json:"deployments,omitempty"`
    Meta *ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponseMeta `json:"meta,omitempty"`
    
}

type ListDeployedDevicesDeploymentResponse struct {
    ContentType string 
    ListDeployedDevicesDeploymentResponse *ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponse 
    StatusCode int64 
    
}

