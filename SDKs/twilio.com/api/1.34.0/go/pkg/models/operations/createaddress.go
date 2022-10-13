package operations

import (
	"openapi/pkg/models/shared"
)

var CreateAddressServers = []string{
	"https://api.twilio.com",
}

type CreateAddressPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type CreateAddressRequestBodyCreateAddressRequest struct {
	AutoCorrectAddress *bool   `form:"name=AutoCorrectAddress"`
	City               string  `form:"name=City"`
	CustomerName       string  `form:"name=CustomerName"`
	EmergencyEnabled   *bool   `form:"name=EmergencyEnabled"`
	FriendlyName       *string `form:"name=FriendlyName"`
	IsoCountry         string  `form:"name=IsoCountry"`
	PostalCode         string  `form:"name=PostalCode"`
	Region             string  `form:"name=Region"`
	Street             string  `form:"name=Street"`
}

type CreateAddressSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateAddressRequest struct {
	ServerURL  *string
	PathParams CreateAddressPathParams
	Request    *CreateAddressRequestBodyCreateAddressRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateAddressSecurity
}

type CreateAddressResponse struct {
	ContentType            string
	StatusCode             int64
	APIV2010AccountAddress *shared.APIV2010AccountAddress
}
