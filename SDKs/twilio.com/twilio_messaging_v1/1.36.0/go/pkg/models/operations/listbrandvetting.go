package operations

import (
"openapi/pkg/models/shared")
var ListBrandVettingServers = []string{
	"https://messaging.twilio.com",
}

type ListBrandVettingPathParams struct {
    BrandSid string `pathParam:"style=simple,explode=false,name=BrandSid"`
    
}

type ListBrandVettingQueryParams struct {
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    VettingProvider *shared.BrandVettingEnumVettingProviderEnum `queryParam:"style=form,explode=true,name=VettingProvider"`
    
}

type ListBrandVettingSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListBrandVettingRequest struct {
    ServerURL *string 
    PathParams ListBrandVettingPathParams 
    QueryParams ListBrandVettingQueryParams 
    Security ListBrandVettingSecurity 
    
}

type ListBrandVettingListBrandVettingResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListBrandVettingListBrandVettingResponse struct {
    Data []shared.MessagingV1BrandRegistrationsBrandVetting `json:"data,omitempty"`
    Meta *ListBrandVettingListBrandVettingResponseMeta `json:"meta,omitempty"`
    
}

type ListBrandVettingResponse struct {
    ContentType string 
    ListBrandVettingResponse *ListBrandVettingListBrandVettingResponse 
    StatusCode int64 
    
}

