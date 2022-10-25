package operations

import (
	"openapi/pkg/models/shared"
)

var CreateSipIPAccessControlListMappingServers = []string{
	"https://api.twilio.com",
}

type CreateSipIPAccessControlListMappingPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	DomainSid  string `pathParam:"style=simple,explode=false,name=DomainSid"`
}

type CreateSipIPAccessControlListMappingCreateSipIPAccessControlListMappingRequest struct {
	IPAccessControlListSid string `form:"name=IpAccessControlListSid"`
}

type CreateSipIPAccessControlListMappingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateSipIPAccessControlListMappingRequest struct {
	ServerURL  *string
	PathParams CreateSipIPAccessControlListMappingPathParams
	Request    *CreateSipIPAccessControlListMappingCreateSipIPAccessControlListMappingRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateSipIPAccessControlListMappingSecurity
}

type CreateSipIPAccessControlListMappingResponse struct {
	ContentType                                              string
	StatusCode                                               int64
	APIV2010AccountSipSipDomainSipIPAccessControlListMapping *shared.APIV2010AccountSipSipDomainSipIPAccessControlListMapping
}
