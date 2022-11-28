package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateShortCodeServerList = []string{
	"https://api.twilio.com",
}

type UpdateShortCodePathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum string

const (
	UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnumHead   UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum = "HEAD"
	UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnumGet    UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum = "GET"
	UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnumPost   UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum = "POST"
	UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnumPatch  UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum = "PATCH"
	UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnumPut    UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum = "PUT"
	UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnumDelete UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum = "DELETE"
)

type UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum string

const (
	UpdateShortCodeUpdateShortCodeRequestSmsMethodEnumHead   UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum = "HEAD"
	UpdateShortCodeUpdateShortCodeRequestSmsMethodEnumGet    UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum = "GET"
	UpdateShortCodeUpdateShortCodeRequestSmsMethodEnumPost   UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum = "POST"
	UpdateShortCodeUpdateShortCodeRequestSmsMethodEnumPatch  UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum = "PATCH"
	UpdateShortCodeUpdateShortCodeRequestSmsMethodEnumPut    UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum = "PUT"
	UpdateShortCodeUpdateShortCodeRequestSmsMethodEnumDelete UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum = "DELETE"
)

type UpdateShortCodeUpdateShortCodeRequest struct {
	APIVersion        *string                                                     `form:"name=ApiVersion"`
	FriendlyName      *string                                                     `form:"name=FriendlyName"`
	SmsFallbackMethod *UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum `form:"name=SmsFallbackMethod"`
	SmsFallbackURL    *string                                                     `form:"name=SmsFallbackUrl"`
	SmsMethod         *UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum         `form:"name=SmsMethod"`
	SmsURL            *string                                                     `form:"name=SmsUrl"`
}

type UpdateShortCodeSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateShortCodeRequest struct {
	ServerURL  *string
	PathParams UpdateShortCodePathParams
	Request    *UpdateShortCodeUpdateShortCodeRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateShortCodeSecurity
}

type UpdateShortCodeResponse struct {
	ContentType              string
	StatusCode               int64
	APIV2010AccountShortCode *shared.APIV2010AccountShortCode
}
