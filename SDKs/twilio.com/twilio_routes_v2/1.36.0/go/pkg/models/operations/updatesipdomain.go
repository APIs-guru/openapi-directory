package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateSipDomainServers = []string{
	"https://routes.twilio.com",
}

type UpdateSipDomainPathParams struct {
	SipDomain string `pathParam:"style=simple,explode=false,name=SipDomain"`
}

type UpdateSipDomainUpdateSipDomainRequest struct {
	FriendlyName *string `form:"name=FriendlyName"`
	VoiceRegion  *string `form:"name=VoiceRegion"`
}

type UpdateSipDomainSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateSipDomainRequest struct {
	ServerURL  *string
	PathParams UpdateSipDomainPathParams
	Request    *UpdateSipDomainUpdateSipDomainRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateSipDomainSecurity
}

type UpdateSipDomainResponse struct {
	ContentType       string
	StatusCode        int64
	RoutesV2SipDomain *shared.RoutesV2SipDomain
}
