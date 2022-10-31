package operations

import (
"openapi/pkg/models/shared")
var UpdateSipIPAddressServers = []string{
	"https://api.twilio.com",
}

type UpdateSipIPAddressPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    IPAccessControlListSid string `pathParam:"style=simple,explode=false,name=IpAccessControlListSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type UpdateSipIPAddressUpdateSipIPAddressRequest struct {
    CidrPrefixLength *int64 `form:"name=CidrPrefixLength"`
    FriendlyName *string `form:"name=FriendlyName"`
    IPAddress *string `form:"name=IpAddress"`
    
}

type UpdateSipIPAddressSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateSipIPAddressRequest struct {
    ServerURL *string 
    PathParams UpdateSipIPAddressPathParams 
    Request *UpdateSipIPAddressUpdateSipIPAddressRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateSipIPAddressSecurity 
    
}

type UpdateSipIPAddressResponse struct {
    ContentType string 
    StatusCode int64 
    APIV2010AccountSipSipIPAccessControlListSipIPAddress *shared.APIV2010AccountSipSipIPAccessControlListSipIPAddress 
    
}

