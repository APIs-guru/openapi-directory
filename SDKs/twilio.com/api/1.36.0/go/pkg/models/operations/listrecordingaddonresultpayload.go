package operations

import (
"openapi/pkg/models/shared")
var ListRecordingAddOnResultPayloadServers = []string{
	"https://api.twilio.com",
}

type ListRecordingAddOnResultPayloadPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    AddOnResultSid string `pathParam:"style=simple,explode=false,name=AddOnResultSid"`
    ReferenceSid string `pathParam:"style=simple,explode=false,name=ReferenceSid"`
    
}

type ListRecordingAddOnResultPayloadQueryParams struct {
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListRecordingAddOnResultPayloadSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListRecordingAddOnResultPayloadRequest struct {
    ServerURL *string 
    PathParams ListRecordingAddOnResultPayloadPathParams 
    QueryParams ListRecordingAddOnResultPayloadQueryParams 
    Security ListRecordingAddOnResultPayloadSecurity 
    
}

type ListRecordingAddOnResultPayloadListRecordingAddOnResultPayloadResponse struct {
    End *int64 `json:"end,omitempty"`
    FirstPageURI *string `json:"first_page_uri,omitempty"`
    NextPageURI *string `json:"next_page_uri,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    Payloads []shared.APIV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload `json:"payloads,omitempty"`
    PreviousPageURI *string `json:"previous_page_uri,omitempty"`
    Start *int64 `json:"start,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

type ListRecordingAddOnResultPayloadResponse struct {
    ContentType string 
    ListRecordingAddOnResultPayloadResponse *ListRecordingAddOnResultPayloadListRecordingAddOnResultPayloadResponse 
    StatusCode int64 
    
}

