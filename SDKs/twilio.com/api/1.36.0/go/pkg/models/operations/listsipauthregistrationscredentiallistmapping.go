package operations

import (
"openapi/pkg/models/shared")
var ListSipAuthRegistrationsCredentialListMappingServers = []string{
	"https://api.twilio.com",
}

type ListSipAuthRegistrationsCredentialListMappingPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    DomainSid string `pathParam:"style=simple,explode=false,name=DomainSid"`
    
}

type ListSipAuthRegistrationsCredentialListMappingQueryParams struct {
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListSipAuthRegistrationsCredentialListMappingSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListSipAuthRegistrationsCredentialListMappingRequest struct {
    ServerURL *string 
    PathParams ListSipAuthRegistrationsCredentialListMappingPathParams 
    QueryParams ListSipAuthRegistrationsCredentialListMappingQueryParams 
    Security ListSipAuthRegistrationsCredentialListMappingSecurity 
    
}

type ListSipAuthRegistrationsCredentialListMappingListSipAuthRegistrationsCredentialListMappingResponse struct {
    Contents []shared.APIV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping `json:"contents,omitempty"`
    End *int64 `json:"end,omitempty"`
    FirstPageURI *string `json:"first_page_uri,omitempty"`
    NextPageURI *string `json:"next_page_uri,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURI *string `json:"previous_page_uri,omitempty"`
    Start *int64 `json:"start,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

type ListSipAuthRegistrationsCredentialListMappingResponse struct {
    ContentType string 
    ListSipAuthRegistrationsCredentialListMappingResponse *ListSipAuthRegistrationsCredentialListMappingListSipAuthRegistrationsCredentialListMappingResponse 
    StatusCode int64 
    
}

