package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateShortCodeServers = []string{
	"https://api.twilio.com",
}

type UpdateShortCodePathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateShortCodeRequestBodySmsFallbackMethodEnum string

const (
	UpdateShortCodeRequestBodySmsFallbackMethodEnumHead   UpdateShortCodeRequestBodySmsFallbackMethodEnum = "HEAD"
	UpdateShortCodeRequestBodySmsFallbackMethodEnumGet    UpdateShortCodeRequestBodySmsFallbackMethodEnum = "GET"
	UpdateShortCodeRequestBodySmsFallbackMethodEnumPost   UpdateShortCodeRequestBodySmsFallbackMethodEnum = "POST"
	UpdateShortCodeRequestBodySmsFallbackMethodEnumPatch  UpdateShortCodeRequestBodySmsFallbackMethodEnum = "PATCH"
	UpdateShortCodeRequestBodySmsFallbackMethodEnumPut    UpdateShortCodeRequestBodySmsFallbackMethodEnum = "PUT"
	UpdateShortCodeRequestBodySmsFallbackMethodEnumDelete UpdateShortCodeRequestBodySmsFallbackMethodEnum = "DELETE"
)

type UpdateShortCodeRequestBodySmsMethodEnum string

const (
	UpdateShortCodeRequestBodySmsMethodEnumHead   UpdateShortCodeRequestBodySmsMethodEnum = "HEAD"
	UpdateShortCodeRequestBodySmsMethodEnumGet    UpdateShortCodeRequestBodySmsMethodEnum = "GET"
	UpdateShortCodeRequestBodySmsMethodEnumPost   UpdateShortCodeRequestBodySmsMethodEnum = "POST"
	UpdateShortCodeRequestBodySmsMethodEnumPatch  UpdateShortCodeRequestBodySmsMethodEnum = "PATCH"
	UpdateShortCodeRequestBodySmsMethodEnumPut    UpdateShortCodeRequestBodySmsMethodEnum = "PUT"
	UpdateShortCodeRequestBodySmsMethodEnumDelete UpdateShortCodeRequestBodySmsMethodEnum = "DELETE"
)

type UpdateShortCodeRequestBodyUpdateShortCodeRequest struct {
	APIVersion        *string                                          `form:"name=ApiVersion"`
	FriendlyName      *string                                          `form:"name=FriendlyName"`
	SmsFallbackMethod *UpdateShortCodeRequestBodySmsFallbackMethodEnum `form:"name=SmsFallbackMethod"`
	SmsFallbackURL    *string                                          `form:"name=SmsFallbackUrl"`
	SmsMethod         *UpdateShortCodeRequestBodySmsMethodEnum         `form:"name=SmsMethod"`
	SmsURL            *string                                          `form:"name=SmsUrl"`
}

type UpdateShortCodeSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateShortCodeRequest struct {
	ServerURL  *string
	PathParams UpdateShortCodePathParams
	Request    *UpdateShortCodeRequestBodyUpdateShortCodeRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateShortCodeSecurity
}

type UpdateShortCodeResponse struct {
	ContentType              string
	StatusCode               int64
	APIV2010AccountShortCode *shared.APIV2010AccountShortCode
}
