package operations

import (
"openapi/pkg/models/shared")
var CreateServiceServers = []string{
	"https://verify.twilio.com",
}

type CreateServiceCreateServiceRequest struct {
    CodeLength *int64 `form:"name=CodeLength"`
    CustomCodeEnabled *bool `form:"name=CustomCodeEnabled"`
    DefaultTemplateSid *string `form:"name=DefaultTemplateSid"`
    DoNotShareWarningEnabled *bool `form:"name=DoNotShareWarningEnabled"`
    DtmfInputRequired *bool `form:"name=DtmfInputRequired"`
    FriendlyName string `form:"name=FriendlyName"`
    LookupEnabled *bool `form:"name=LookupEnabled"`
    Psd2Enabled *bool `form:"name=Psd2Enabled"`
    PushApnCredentialSid *string `form:"name=Push.ApnCredentialSid"`
    PushFcmCredentialSid *string `form:"name=Push.FcmCredentialSid"`
    PushIncludeDate *bool `form:"name=Push.IncludeDate"`
    SkipSmsToLandlines *bool `form:"name=SkipSmsToLandlines"`
    TotpCodeLength *int64 `form:"name=Totp.CodeLength"`
    TotpIssuer *string `form:"name=Totp.Issuer"`
    TotpSkew *int64 `form:"name=Totp.Skew"`
    TotpTimeStep *int64 `form:"name=Totp.TimeStep"`
    TtsName *string `form:"name=TtsName"`
    
}

type CreateServiceSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateServiceRequest struct {
    ServerURL *string 
    Request *CreateServiceCreateServiceRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateServiceSecurity 
    
}

type CreateServiceResponse struct {
    ContentType string 
    StatusCode int64 
    VerifyV2Service *shared.VerifyV2Service 
    
}

