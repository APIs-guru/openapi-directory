package operations

import (
"openapi/pkg/models/shared")
var UpdateAddressServers = []string{
	"https://api.twilio.com",
}

type UpdateAddressPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type UpdateAddressUpdateAddressRequest struct {
    AutoCorrectAddress *bool `form:"name=AutoCorrectAddress"`
    City *string `form:"name=City"`
    CustomerName *string `form:"name=CustomerName"`
    EmergencyEnabled *bool `form:"name=EmergencyEnabled"`
    FriendlyName *string `form:"name=FriendlyName"`
    PostalCode *string `form:"name=PostalCode"`
    Region *string `form:"name=Region"`
    Street *string `form:"name=Street"`
    
}

type UpdateAddressSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateAddressRequest struct {
    ServerURL *string 
    PathParams UpdateAddressPathParams 
    Request *UpdateAddressUpdateAddressRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateAddressSecurity 
    
}

type UpdateAddressResponse struct {
    ContentType string 
    StatusCode int64 
    APIV2010AccountAddress *shared.APIV2010AccountAddress 
    
}

