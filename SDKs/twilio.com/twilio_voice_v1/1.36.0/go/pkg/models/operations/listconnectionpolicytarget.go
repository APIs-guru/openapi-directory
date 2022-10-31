package operations

import (
"openapi/pkg/models/shared")
var ListConnectionPolicyTargetServers = []string{
	"https://voice.twilio.com",
}

type ListConnectionPolicyTargetPathParams struct {
    ConnectionPolicySid string `pathParam:"style=simple,explode=false,name=ConnectionPolicySid"`
    
}

type ListConnectionPolicyTargetQueryParams struct {
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListConnectionPolicyTargetSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListConnectionPolicyTargetRequest struct {
    ServerURL *string 
    PathParams ListConnectionPolicyTargetPathParams 
    QueryParams ListConnectionPolicyTargetQueryParams 
    Security ListConnectionPolicyTargetSecurity 
    
}

type ListConnectionPolicyTargetListConnectionPolicyTargetResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListConnectionPolicyTargetListConnectionPolicyTargetResponse struct {
    Meta *ListConnectionPolicyTargetListConnectionPolicyTargetResponseMeta `json:"meta,omitempty"`
    Targets []shared.VoiceV1ConnectionPolicyConnectionPolicyTarget `json:"targets,omitempty"`
    
}

type ListConnectionPolicyTargetResponse struct {
    ContentType string 
    ListConnectionPolicyTargetResponse *ListConnectionPolicyTargetListConnectionPolicyTargetResponse 
    StatusCode int64 
    
}

