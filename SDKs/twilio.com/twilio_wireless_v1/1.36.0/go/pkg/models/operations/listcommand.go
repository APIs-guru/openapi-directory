package operations

import (
"openapi/pkg/models/shared")
var ListCommandServers = []string{
	"https://wireless.twilio.com",
}

type ListCommandQueryParams struct {
    Direction *shared.CommandEnumDirectionEnum `queryParam:"style=form,explode=true,name=Direction"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    Sim *string `queryParam:"style=form,explode=true,name=Sim"`
    Status *shared.CommandEnumStatusEnum `queryParam:"style=form,explode=true,name=Status"`
    Transport *shared.CommandEnumTransportEnum `queryParam:"style=form,explode=true,name=Transport"`
    
}

type ListCommandSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListCommandRequest struct {
    ServerURL *string 
    QueryParams ListCommandQueryParams 
    Security ListCommandSecurity 
    
}

type ListCommandListCommandResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListCommandListCommandResponse struct {
    Commands []shared.WirelessV1Command `json:"commands,omitempty"`
    Meta *ListCommandListCommandResponseMeta `json:"meta,omitempty"`
    
}

type ListCommandResponse struct {
    ContentType string 
    ListCommandResponse *ListCommandListCommandResponse 
    StatusCode int64 
    
}

