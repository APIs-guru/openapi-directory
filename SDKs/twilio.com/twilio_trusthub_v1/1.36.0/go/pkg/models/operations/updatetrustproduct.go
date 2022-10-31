package operations

import (
"openapi/pkg/models/shared")
var UpdateTrustProductServers = []string{
	"https://trusthub.twilio.com",
}

type UpdateTrustProductPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type UpdateTrustProductUpdateTrustProductRequest struct {
    Email *string `form:"name=Email"`
    FriendlyName *string `form:"name=FriendlyName"`
    Status *shared.TrustProductEnumStatusEnum `form:"name=Status"`
    StatusCallback *string `form:"name=StatusCallback"`
    
}

type UpdateTrustProductSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateTrustProductRequest struct {
    ServerURL *string 
    PathParams UpdateTrustProductPathParams 
    Request *UpdateTrustProductUpdateTrustProductRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateTrustProductSecurity 
    
}

type UpdateTrustProductResponse struct {
    ContentType string 
    StatusCode int64 
    TrusthubV1TrustProduct *shared.TrusthubV1TrustProduct 
    
}

