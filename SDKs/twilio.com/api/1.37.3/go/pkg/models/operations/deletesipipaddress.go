package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteSipIPAddressServerList = []string{
	"https://api.twilio.com",
}

type DeleteSipIPAddressPathParams struct {
	AccountSid             string `pathParam:"style=simple,explode=false,name=AccountSid"`
	IPAccessControlListSid string `pathParam:"style=simple,explode=false,name=IpAccessControlListSid"`
	Sid                    string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteSipIPAddressSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteSipIPAddressRequest struct {
	ServerURL  *string
	PathParams DeleteSipIPAddressPathParams
	Security   DeleteSipIPAddressSecurity
}

type DeleteSipIPAddressResponse struct {
	ContentType string
	StatusCode  int64
}
