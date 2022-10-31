package operations

import (
	"openapi/pkg/models/shared"
)

var CreateUsAppToPersonServers = []string{
	"https://messaging.twilio.com",
}

type CreateUsAppToPersonPathParams struct {
	MessagingServiceSid string `pathParam:"style=simple,explode=false,name=MessagingServiceSid"`
}

type CreateUsAppToPersonCreateUsAppToPersonRequest struct {
	BrandRegistrationSid string   `form:"name=BrandRegistrationSid"`
	Description          string   `form:"name=Description"`
	HasEmbeddedLinks     bool     `form:"name=HasEmbeddedLinks"`
	HasEmbeddedPhone     bool     `form:"name=HasEmbeddedPhone"`
	MessageSamples       []string `form:"name=MessageSamples"`
	UsAppToPersonUsecase string   `form:"name=UsAppToPersonUsecase"`
}

type CreateUsAppToPersonSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateUsAppToPersonRequest struct {
	ServerURL  *string
	PathParams CreateUsAppToPersonPathParams
	Request    *CreateUsAppToPersonCreateUsAppToPersonRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateUsAppToPersonSecurity
}

type CreateUsAppToPersonResponse struct {
	ContentType                     string
	StatusCode                      int64
	MessagingV1ServiceUsAppToPerson *shared.MessagingV1ServiceUsAppToPerson
}
