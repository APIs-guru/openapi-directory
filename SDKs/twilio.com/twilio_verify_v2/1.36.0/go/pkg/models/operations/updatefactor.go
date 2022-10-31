package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateFactorServers = []string{
	"https://verify.twilio.com",
}

type UpdateFactorPathParams struct {
	Identity   string `pathParam:"style=simple,explode=false,name=Identity"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateFactorUpdateFactorRequest struct {
	AuthPayload                *string                              `form:"name=AuthPayload"`
	ConfigAlg                  *shared.FactorEnumTotpAlgorithmsEnum `form:"name=Config.Alg"`
	ConfigCodeLength           *int64                               `form:"name=Config.CodeLength"`
	ConfigNotificationPlatform *string                              `form:"name=Config.NotificationPlatform"`
	ConfigNotificationToken    *string                              `form:"name=Config.NotificationToken"`
	ConfigSdkVersion           *string                              `form:"name=Config.SdkVersion"`
	ConfigSkew                 *int64                               `form:"name=Config.Skew"`
	ConfigTimeStep             *int64                               `form:"name=Config.TimeStep"`
	FriendlyName               *string                              `form:"name=FriendlyName"`
}

type UpdateFactorSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateFactorRequest struct {
	ServerURL  *string
	PathParams UpdateFactorPathParams
	Request    *UpdateFactorUpdateFactorRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateFactorSecurity
}

type UpdateFactorResponse struct {
	ContentType                 string
	StatusCode                  int64
	VerifyV2ServiceEntityFactor *shared.VerifyV2ServiceEntityFactor
}
