package operations

import (
	"openapi/pkg/models/shared"
)

var CreateUsAppToPersonServerList = []string{
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
	HelpKeywords         []string `form:"name=HelpKeywords"`
	HelpMessage          *string  `form:"name=HelpMessage"`
	MessageFlow          *string  `form:"name=MessageFlow"`
	MessageSamples       []string `form:"name=MessageSamples"`
	OptInKeywords        []string `form:"name=OptInKeywords"`
	OptInMessage         *string  `form:"name=OptInMessage"`
	OptOutKeywords       []string `form:"name=OptOutKeywords"`
	OptOutMessage        *string  `form:"name=OptOutMessage"`
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
