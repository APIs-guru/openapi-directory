package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateCallServerList = []string{
	"https://api.twilio.com",
}

type UpdateCallPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateCallUpdateCallRequestFallbackMethodEnum string

const (
	UpdateCallUpdateCallRequestFallbackMethodEnumHead   UpdateCallUpdateCallRequestFallbackMethodEnum = "HEAD"
	UpdateCallUpdateCallRequestFallbackMethodEnumGet    UpdateCallUpdateCallRequestFallbackMethodEnum = "GET"
	UpdateCallUpdateCallRequestFallbackMethodEnumPost   UpdateCallUpdateCallRequestFallbackMethodEnum = "POST"
	UpdateCallUpdateCallRequestFallbackMethodEnumPatch  UpdateCallUpdateCallRequestFallbackMethodEnum = "PATCH"
	UpdateCallUpdateCallRequestFallbackMethodEnumPut    UpdateCallUpdateCallRequestFallbackMethodEnum = "PUT"
	UpdateCallUpdateCallRequestFallbackMethodEnumDelete UpdateCallUpdateCallRequestFallbackMethodEnum = "DELETE"
)

type UpdateCallUpdateCallRequestMethodEnum string

const (
	UpdateCallUpdateCallRequestMethodEnumHead   UpdateCallUpdateCallRequestMethodEnum = "HEAD"
	UpdateCallUpdateCallRequestMethodEnumGet    UpdateCallUpdateCallRequestMethodEnum = "GET"
	UpdateCallUpdateCallRequestMethodEnumPost   UpdateCallUpdateCallRequestMethodEnum = "POST"
	UpdateCallUpdateCallRequestMethodEnumPatch  UpdateCallUpdateCallRequestMethodEnum = "PATCH"
	UpdateCallUpdateCallRequestMethodEnumPut    UpdateCallUpdateCallRequestMethodEnum = "PUT"
	UpdateCallUpdateCallRequestMethodEnumDelete UpdateCallUpdateCallRequestMethodEnum = "DELETE"
)

type UpdateCallUpdateCallRequestStatusCallbackMethodEnum string

const (
	UpdateCallUpdateCallRequestStatusCallbackMethodEnumHead   UpdateCallUpdateCallRequestStatusCallbackMethodEnum = "HEAD"
	UpdateCallUpdateCallRequestStatusCallbackMethodEnumGet    UpdateCallUpdateCallRequestStatusCallbackMethodEnum = "GET"
	UpdateCallUpdateCallRequestStatusCallbackMethodEnumPost   UpdateCallUpdateCallRequestStatusCallbackMethodEnum = "POST"
	UpdateCallUpdateCallRequestStatusCallbackMethodEnumPatch  UpdateCallUpdateCallRequestStatusCallbackMethodEnum = "PATCH"
	UpdateCallUpdateCallRequestStatusCallbackMethodEnumPut    UpdateCallUpdateCallRequestStatusCallbackMethodEnum = "PUT"
	UpdateCallUpdateCallRequestStatusCallbackMethodEnumDelete UpdateCallUpdateCallRequestStatusCallbackMethodEnum = "DELETE"
)

type UpdateCallUpdateCallRequest struct {
	FallbackMethod       *UpdateCallUpdateCallRequestFallbackMethodEnum       `form:"name=FallbackMethod"`
	FallbackURL          *string                                              `form:"name=FallbackUrl"`
	Method               *UpdateCallUpdateCallRequestMethodEnum               `form:"name=Method"`
	Status               *shared.CallEnumUpdateStatusEnum                     `form:"name=Status"`
	StatusCallback       *string                                              `form:"name=StatusCallback"`
	StatusCallbackMethod *UpdateCallUpdateCallRequestStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
	TimeLimit            *int64                                               `form:"name=TimeLimit"`
	Twiml                *string                                              `form:"name=Twiml"`
	URL                  *string                                              `form:"name=Url"`
}

type UpdateCallSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateCallRequest struct {
	ServerURL  *string
	PathParams UpdateCallPathParams
	Request    *UpdateCallUpdateCallRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateCallSecurity
}

type UpdateCallResponse struct {
	ContentType         string
	StatusCode          int64
	APIV2010AccountCall *shared.APIV2010AccountCall
}
