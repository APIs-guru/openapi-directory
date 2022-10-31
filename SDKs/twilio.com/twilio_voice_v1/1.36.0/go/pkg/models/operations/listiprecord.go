package operations

import (
"openapi/pkg/models/shared")
var ListIPRecordServers = []string{
	"https://voice.twilio.com",
}

type ListIPRecordQueryParams struct {
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListIPRecordSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListIPRecordRequest struct {
    ServerURL *string 
    QueryParams ListIPRecordQueryParams 
    Security ListIPRecordSecurity 
    
}

type ListIPRecordListIPRecordResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListIPRecordListIPRecordResponse struct {
    IPRecords []shared.VoiceV1IPRecord `json:"ip_records,omitempty"`
    Meta *ListIPRecordListIPRecordResponseMeta `json:"meta,omitempty"`
    
}

type ListIPRecordResponse struct {
    ContentType string 
    ListIPRecordResponse *ListIPRecordListIPRecordResponse 
    StatusCode int64 
    
}

