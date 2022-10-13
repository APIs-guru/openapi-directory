package operations

import (
	"openapi/pkg/models/shared"
)

var CreateUsageTriggerServers = []string{
	"https://api.twilio.com",
}

type CreateUsageTriggerPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type CreateUsageTriggerRequestBodyCallbackMethodEnum string

const (
	CreateUsageTriggerRequestBodyCallbackMethodEnumHead   CreateUsageTriggerRequestBodyCallbackMethodEnum = "HEAD"
	CreateUsageTriggerRequestBodyCallbackMethodEnumGet    CreateUsageTriggerRequestBodyCallbackMethodEnum = "GET"
	CreateUsageTriggerRequestBodyCallbackMethodEnumPost   CreateUsageTriggerRequestBodyCallbackMethodEnum = "POST"
	CreateUsageTriggerRequestBodyCallbackMethodEnumPatch  CreateUsageTriggerRequestBodyCallbackMethodEnum = "PATCH"
	CreateUsageTriggerRequestBodyCallbackMethodEnumPut    CreateUsageTriggerRequestBodyCallbackMethodEnum = "PUT"
	CreateUsageTriggerRequestBodyCallbackMethodEnumDelete CreateUsageTriggerRequestBodyCallbackMethodEnum = "DELETE"
)

type CreateUsageTriggerRequestBodyCreateUsageTriggerRequest struct {
	CallbackMethod *CreateUsageTriggerRequestBodyCallbackMethodEnum `form:"name=CallbackMethod"`
	CallbackURL    string                                           `form:"name=CallbackUrl"`
	FriendlyName   *string                                          `form:"name=FriendlyName"`
	Recurring      *shared.UsageTriggerEnumRecurringEnum            `form:"name=Recurring"`
	TriggerBy      *shared.UsageTriggerEnumTriggerFieldEnum         `form:"name=TriggerBy"`
	TriggerValue   string                                           `form:"name=TriggerValue"`
	UsageCategory  shared.UsageTriggerEnumUsageCategoryEnum         `form:"name=UsageCategory"`
}

type CreateUsageTriggerSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateUsageTriggerRequest struct {
	ServerURL  *string
	PathParams CreateUsageTriggerPathParams
	Request    *CreateUsageTriggerRequestBodyCreateUsageTriggerRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateUsageTriggerSecurity
}

type CreateUsageTriggerResponse struct {
	ContentType                      string
	StatusCode                       int64
	APIV2010AccountUsageUsageTrigger *shared.APIV2010AccountUsageUsageTrigger
}
