package operations

import (
	"openapi/pkg/models/shared"
)

var CreateEntityServers = []string{
	"https://verify.twilio.com",
}

type CreateEntityPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateEntityCreateEntityRequest struct {
	Identity string `form:"name=Identity"`
}

type CreateEntitySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateEntityRequest struct {
	ServerURL  *string
	PathParams CreateEntityPathParams
	Request    *CreateEntityCreateEntityRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateEntitySecurity
}

type CreateEntityResponse struct {
	ContentType           string
	StatusCode            int64
	VerifyV2ServiceEntity *shared.VerifyV2ServiceEntity
}
