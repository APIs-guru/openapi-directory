package operations

import (
	"openapi/pkg/models/shared"
)

var CreateSipIPAddressServers = []string{
	"https://api.twilio.com",
}

type CreateSipIPAddressPathParams struct {
	AccountSid             string `pathParam:"style=simple,explode=false,name=AccountSid"`
	IPAccessControlListSid string `pathParam:"style=simple,explode=false,name=IpAccessControlListSid"`
}

type CreateSipIPAddressRequestBodyCreateSipIPAddressRequest struct {
	CidrPrefixLength *int64 `form:"name=CidrPrefixLength"`
	FriendlyName     string `form:"name=FriendlyName"`
	IPAddress        string `form:"name=IpAddress"`
}

type CreateSipIPAddressSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateSipIPAddressRequest struct {
	ServerURL  *string
	PathParams CreateSipIPAddressPathParams
	Request    *CreateSipIPAddressRequestBodyCreateSipIPAddressRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateSipIPAddressSecurity
}

type CreateSipIPAddressResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	APIV2010AccountSipSipIPAccessControlListSipIPAddress *shared.APIV2010AccountSipSipIPAccessControlListSipIPAddress
}
