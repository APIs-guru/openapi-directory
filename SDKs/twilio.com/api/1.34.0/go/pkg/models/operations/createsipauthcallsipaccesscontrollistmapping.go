package operations

import (
	"openapi/pkg/models/shared"
)

var CreateSipAuthCallsIPAccessControlListMappingServers = []string{
	"https://api.twilio.com",
}

type CreateSipAuthCallsIPAccessControlListMappingPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	DomainSid  string `pathParam:"style=simple,explode=false,name=DomainSid"`
}

type CreateSipAuthCallsIPAccessControlListMappingRequestBodyCreateSipAuthCallsIPAccessControlListMappingRequest struct {
	IPAccessControlListSid string `form:"name=IpAccessControlListSid"`
}

type CreateSipAuthCallsIPAccessControlListMappingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateSipAuthCallsIPAccessControlListMappingRequest struct {
	ServerURL  *string
	PathParams CreateSipAuthCallsIPAccessControlListMappingPathParams
	Request    *CreateSipAuthCallsIPAccessControlListMappingRequestBodyCreateSipAuthCallsIPAccessControlListMappingRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateSipAuthCallsIPAccessControlListMappingSecurity
}

type CreateSipAuthCallsIPAccessControlListMappingResponse struct {
	ContentType                                                                          string
	StatusCode                                                                           int64
	APIV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIPAccessControlListMapping *shared.APIV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIPAccessControlListMapping
}
