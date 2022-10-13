package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateUsageTriggerServers = []string{
	"https://api.twilio.com",
}

type UpdateUsageTriggerPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateUsageTriggerRequestBodyCallbackMethodEnum string

const (
	UpdateUsageTriggerRequestBodyCallbackMethodEnumHead   UpdateUsageTriggerRequestBodyCallbackMethodEnum = "HEAD"
	UpdateUsageTriggerRequestBodyCallbackMethodEnumGet    UpdateUsageTriggerRequestBodyCallbackMethodEnum = "GET"
	UpdateUsageTriggerRequestBodyCallbackMethodEnumPost   UpdateUsageTriggerRequestBodyCallbackMethodEnum = "POST"
	UpdateUsageTriggerRequestBodyCallbackMethodEnumPatch  UpdateUsageTriggerRequestBodyCallbackMethodEnum = "PATCH"
	UpdateUsageTriggerRequestBodyCallbackMethodEnumPut    UpdateUsageTriggerRequestBodyCallbackMethodEnum = "PUT"
	UpdateUsageTriggerRequestBodyCallbackMethodEnumDelete UpdateUsageTriggerRequestBodyCallbackMethodEnum = "DELETE"
)

type UpdateUsageTriggerRequestBodyUpdateUsageTriggerRequest struct {
	CallbackMethod *UpdateUsageTriggerRequestBodyCallbackMethodEnum `form:"name=CallbackMethod"`
	CallbackURL    *string                                          `form:"name=CallbackUrl"`
	FriendlyName   *string                                          `form:"name=FriendlyName"`
}

type UpdateUsageTriggerSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateUsageTriggerRequest struct {
	ServerURL  *string
	PathParams UpdateUsageTriggerPathParams
	Request    *UpdateUsageTriggerRequestBodyUpdateUsageTriggerRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateUsageTriggerSecurity
}

type UpdateUsageTriggerResponse struct {
	ContentType                      string
	StatusCode                       int64
	APIV2010AccountUsageUsageTrigger *shared.APIV2010AccountUsageUsageTrigger
}
