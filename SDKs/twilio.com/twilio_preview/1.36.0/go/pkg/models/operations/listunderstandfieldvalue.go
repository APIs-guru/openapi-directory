package operations

import (
"openapi/pkg/models/shared")
var ListUnderstandFieldValueServers = []string{
	"https://preview.twilio.com",
}

type ListUnderstandFieldValuePathParams struct {
    AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
    FieldTypeSid string `pathParam:"style=simple,explode=false,name=FieldTypeSid"`
    
}

type ListUnderstandFieldValueQueryParams struct {
    Language *string `queryParam:"style=form,explode=true,name=Language"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListUnderstandFieldValueSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListUnderstandFieldValueRequest struct {
    ServerURL *string 
    PathParams ListUnderstandFieldValuePathParams 
    QueryParams ListUnderstandFieldValueQueryParams 
    Security ListUnderstandFieldValueSecurity 
    
}

type ListUnderstandFieldValueListUnderstandFieldValueResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListUnderstandFieldValueListUnderstandFieldValueResponse struct {
    FieldValues []shared.PreviewUnderstandAssistantFieldTypeFieldValue `json:"field_values,omitempty"`
    Meta *ListUnderstandFieldValueListUnderstandFieldValueResponseMeta `json:"meta,omitempty"`
    
}

type ListUnderstandFieldValueResponse struct {
    ContentType string 
    ListUnderstandFieldValueResponse *ListUnderstandFieldValueListUnderstandFieldValueResponse 
    StatusCode int64 
    
}

