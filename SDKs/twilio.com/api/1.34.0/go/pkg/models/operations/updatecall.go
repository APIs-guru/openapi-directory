package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateCallServers = []string{
	"https://api.twilio.com",
}

type UpdateCallPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateCallRequestBodyFallbackMethodEnum string

const (
	UpdateCallRequestBodyFallbackMethodEnumHead   UpdateCallRequestBodyFallbackMethodEnum = "HEAD"
	UpdateCallRequestBodyFallbackMethodEnumGet    UpdateCallRequestBodyFallbackMethodEnum = "GET"
	UpdateCallRequestBodyFallbackMethodEnumPost   UpdateCallRequestBodyFallbackMethodEnum = "POST"
	UpdateCallRequestBodyFallbackMethodEnumPatch  UpdateCallRequestBodyFallbackMethodEnum = "PATCH"
	UpdateCallRequestBodyFallbackMethodEnumPut    UpdateCallRequestBodyFallbackMethodEnum = "PUT"
	UpdateCallRequestBodyFallbackMethodEnumDelete UpdateCallRequestBodyFallbackMethodEnum = "DELETE"
)

type UpdateCallRequestBodyMethodEnum string

const (
	UpdateCallRequestBodyMethodEnumHead   UpdateCallRequestBodyMethodEnum = "HEAD"
	UpdateCallRequestBodyMethodEnumGet    UpdateCallRequestBodyMethodEnum = "GET"
	UpdateCallRequestBodyMethodEnumPost   UpdateCallRequestBodyMethodEnum = "POST"
	UpdateCallRequestBodyMethodEnumPatch  UpdateCallRequestBodyMethodEnum = "PATCH"
	UpdateCallRequestBodyMethodEnumPut    UpdateCallRequestBodyMethodEnum = "PUT"
	UpdateCallRequestBodyMethodEnumDelete UpdateCallRequestBodyMethodEnum = "DELETE"
)

type UpdateCallRequestBodyStatusCallbackMethodEnum string

const (
	UpdateCallRequestBodyStatusCallbackMethodEnumHead   UpdateCallRequestBodyStatusCallbackMethodEnum = "HEAD"
	UpdateCallRequestBodyStatusCallbackMethodEnumGet    UpdateCallRequestBodyStatusCallbackMethodEnum = "GET"
	UpdateCallRequestBodyStatusCallbackMethodEnumPost   UpdateCallRequestBodyStatusCallbackMethodEnum = "POST"
	UpdateCallRequestBodyStatusCallbackMethodEnumPatch  UpdateCallRequestBodyStatusCallbackMethodEnum = "PATCH"
	UpdateCallRequestBodyStatusCallbackMethodEnumPut    UpdateCallRequestBodyStatusCallbackMethodEnum = "PUT"
	UpdateCallRequestBodyStatusCallbackMethodEnumDelete UpdateCallRequestBodyStatusCallbackMethodEnum = "DELETE"
)

type UpdateCallRequestBodyUpdateCallRequest struct {
	FallbackMethod       *UpdateCallRequestBodyFallbackMethodEnum       `form:"name=FallbackMethod"`
	FallbackURL          *string                                        `form:"name=FallbackUrl"`
	Method               *UpdateCallRequestBodyMethodEnum               `form:"name=Method"`
	Status               *shared.CallEnumUpdateStatusEnum               `form:"name=Status"`
	StatusCallback       *string                                        `form:"name=StatusCallback"`
	StatusCallbackMethod *UpdateCallRequestBodyStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
	TimeLimit            *int64                                         `form:"name=TimeLimit"`
	Twiml                *string                                        `form:"name=Twiml"`
	URL                  *string                                        `form:"name=Url"`
}

type UpdateCallSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateCallRequest struct {
	ServerURL  *string
	PathParams UpdateCallPathParams
	Request    *UpdateCallRequestBodyUpdateCallRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateCallSecurity
}

type UpdateCallResponse struct {
	ContentType         string
	StatusCode          int64
	APIV2010AccountCall *shared.APIV2010AccountCall
}
