package operations

import (
"openapi/pkg/models/shared")
var ListShortCodeServers = []string{
	"https://messaging.twilio.com",
}

type ListShortCodePathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    
}

type ListShortCodeQueryParams struct {
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListShortCodeSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListShortCodeRequest struct {
    ServerURL *string 
    PathParams ListShortCodePathParams 
    QueryParams ListShortCodeQueryParams 
    Security ListShortCodeSecurity 
    
}

type ListShortCodeListShortCodeResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListShortCodeListShortCodeResponse struct {
    Meta *ListShortCodeListShortCodeResponseMeta `json:"meta,omitempty"`
    ShortCodes []shared.MessagingV1ServiceShortCode `json:"short_codes,omitempty"`
    
}

type ListShortCodeResponse struct {
    ContentType string 
    ListShortCodeResponse *ListShortCodeListShortCodeResponse 
    StatusCode int64 
    
}

