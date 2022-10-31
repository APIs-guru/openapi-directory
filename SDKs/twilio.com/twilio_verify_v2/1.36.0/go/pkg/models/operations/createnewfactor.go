package operations

import (
"openapi/pkg/models/shared")
var CreateNewFactorServers = []string{
	"https://verify.twilio.com",
}

type CreateNewFactorPathParams struct {
    Identity string `pathParam:"style=simple,explode=false,name=Identity"`
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    
}

type CreateNewFactorCreateNewFactorRequest struct {
    BindingAlg *string `form:"name=Binding.Alg"`
    BindingPublicKey *string `form:"name=Binding.PublicKey"`
    BindingSecret *string `form:"name=Binding.Secret"`
    ConfigAlg *shared.NewFactorEnumTotpAlgorithmsEnum `form:"name=Config.Alg"`
    ConfigAppID *string `form:"name=Config.AppId"`
    ConfigCodeLength *int64 `form:"name=Config.CodeLength"`
    ConfigNotificationPlatform *shared.NewFactorEnumNotificationPlatformsEnum `form:"name=Config.NotificationPlatform"`
    ConfigNotificationToken *string `form:"name=Config.NotificationToken"`
    ConfigSdkVersion *string `form:"name=Config.SdkVersion"`
    ConfigSkew *int64 `form:"name=Config.Skew"`
    ConfigTimeStep *int64 `form:"name=Config.TimeStep"`
    FactorType shared.NewFactorEnumFactorTypesEnum `form:"name=FactorType"`
    FriendlyName string `form:"name=FriendlyName"`
    Metadata *interface{} `form:"name=Metadata"`
    
}

type CreateNewFactorSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateNewFactorRequest struct {
    ServerURL *string 
    PathParams CreateNewFactorPathParams 
    Request *CreateNewFactorCreateNewFactorRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateNewFactorSecurity 
    
}

type CreateNewFactorResponse struct {
    ContentType string 
    StatusCode int64 
    VerifyV2ServiceEntityNewFactor *shared.VerifyV2ServiceEntityNewFactor 
    
}

