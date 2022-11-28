package operations

import (
	"openapi/pkg/models/shared"
)

var FetchSipIPAddressServerList = []string{
	"https://api.twilio.com",
}

type FetchSipIPAddressPathParams struct {
	AccountSid             string `pathParam:"style=simple,explode=false,name=AccountSid"`
	IPAccessControlListSid string `pathParam:"style=simple,explode=false,name=IpAccessControlListSid"`
	Sid                    string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchSipIPAddressSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchSipIPAddressRequest struct {
	ServerURL  *string
	PathParams FetchSipIPAddressPathParams
	Security   FetchSipIPAddressSecurity
}

type FetchSipIPAddressResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	APIV2010AccountSipSipIPAccessControlListSipIPAddress *shared.APIV2010AccountSipSipIPAccessControlListSipIPAddress
}
