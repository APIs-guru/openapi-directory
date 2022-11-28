package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateHostedNumbersHostedNumberOrderServerList = []string{
	"https://preview.twilio.com",
}

type UpdateHostedNumbersHostedNumberOrderPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest struct {
	CallDelay               *int64                                            `form:"name=CallDelay"`
	CcEmails                []string                                          `form:"name=CcEmails"`
	Email                   *string                                           `form:"name=Email"`
	Extension               *string                                           `form:"name=Extension"`
	FriendlyName            *string                                           `form:"name=FriendlyName"`
	Status                  *shared.HostedNumberOrderEnumStatusEnum           `form:"name=Status"`
	UniqueName              *string                                           `form:"name=UniqueName"`
	VerificationCode        *string                                           `form:"name=VerificationCode"`
	VerificationDocumentSid *string                                           `form:"name=VerificationDocumentSid"`
	VerificationType        *shared.HostedNumberOrderEnumVerificationTypeEnum `form:"name=VerificationType"`
}

type UpdateHostedNumbersHostedNumberOrderSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateHostedNumbersHostedNumberOrderRequest struct {
	ServerURL  *string
	PathParams UpdateHostedNumbersHostedNumberOrderPathParams
	Request    *UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateHostedNumbersHostedNumberOrderSecurity
}

type UpdateHostedNumbersHostedNumberOrderResponse struct {
	ContentType                           string
	StatusCode                            int64
	PreviewHostedNumbersHostedNumberOrder *shared.PreviewHostedNumbersHostedNumberOrder
}
