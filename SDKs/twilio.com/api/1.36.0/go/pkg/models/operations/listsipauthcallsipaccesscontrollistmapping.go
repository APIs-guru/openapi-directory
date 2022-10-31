package operations

import (
"openapi/pkg/models/shared")
var ListSipAuthCallsIPAccessControlListMappingServers = []string{
	"https://api.twilio.com",
}

type ListSipAuthCallsIPAccessControlListMappingPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    DomainSid string `pathParam:"style=simple,explode=false,name=DomainSid"`
    
}

type ListSipAuthCallsIPAccessControlListMappingQueryParams struct {
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListSipAuthCallsIPAccessControlListMappingSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListSipAuthCallsIPAccessControlListMappingRequest struct {
    ServerURL *string 
    PathParams ListSipAuthCallsIPAccessControlListMappingPathParams 
    QueryParams ListSipAuthCallsIPAccessControlListMappingQueryParams 
    Security ListSipAuthCallsIPAccessControlListMappingSecurity 
    
}

type ListSipAuthCallsIPAccessControlListMappingListSipAuthCallsIPAccessControlListMappingResponse struct {
    Contents []shared.APIV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIPAccessControlListMapping `json:"contents,omitempty"`
    End *int64 `json:"end,omitempty"`
    FirstPageURI *string `json:"first_page_uri,omitempty"`
    NextPageURI *string `json:"next_page_uri,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURI *string `json:"previous_page_uri,omitempty"`
    Start *int64 `json:"start,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

type ListSipAuthCallsIPAccessControlListMappingResponse struct {
    ContentType string 
    ListSipAuthCallsIPAccessControlListMappingResponse *ListSipAuthCallsIPAccessControlListMappingListSipAuthCallsIPAccessControlListMappingResponse 
    StatusCode int64 
    
}

