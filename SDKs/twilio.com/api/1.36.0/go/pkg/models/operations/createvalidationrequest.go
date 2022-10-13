package operations

import (
	"openapi/pkg/models/shared"
)

var CreateValidationRequestServers = []string{
	"https://api.twilio.com",
}

type CreateValidationRequestPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type CreateValidationRequestRequestBodyStatusCallbackMethodEnum string

const (
	CreateValidationRequestRequestBodyStatusCallbackMethodEnumHead   CreateValidationRequestRequestBodyStatusCallbackMethodEnum = "HEAD"
	CreateValidationRequestRequestBodyStatusCallbackMethodEnumGet    CreateValidationRequestRequestBodyStatusCallbackMethodEnum = "GET"
	CreateValidationRequestRequestBodyStatusCallbackMethodEnumPost   CreateValidationRequestRequestBodyStatusCallbackMethodEnum = "POST"
	CreateValidationRequestRequestBodyStatusCallbackMethodEnumPatch  CreateValidationRequestRequestBodyStatusCallbackMethodEnum = "PATCH"
	CreateValidationRequestRequestBodyStatusCallbackMethodEnumPut    CreateValidationRequestRequestBodyStatusCallbackMethodEnum = "PUT"
	CreateValidationRequestRequestBodyStatusCallbackMethodEnumDelete CreateValidationRequestRequestBodyStatusCallbackMethodEnum = "DELETE"
)

type CreateValidationRequestRequestBodyCreateValidationRequestRequest struct {
	CallDelay            *int64                                                      `form:"name=CallDelay"`
	Extension            *string                                                     `form:"name=Extension"`
	FriendlyName         *string                                                     `form:"name=FriendlyName"`
	PhoneNumber          string                                                      `form:"name=PhoneNumber"`
	StatusCallback       *string                                                     `form:"name=StatusCallback"`
	StatusCallbackMethod *CreateValidationRequestRequestBodyStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
}

type CreateValidationRequestSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateValidationRequestRequest struct {
	ServerURL  *string
	PathParams CreateValidationRequestPathParams
	Request    *CreateValidationRequestRequestBodyCreateValidationRequestRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateValidationRequestSecurity
}

type CreateValidationRequestResponse struct {
	ContentType                      string
	StatusCode                       int64
	APIV2010AccountValidationRequest *shared.APIV2010AccountValidationRequest
}
