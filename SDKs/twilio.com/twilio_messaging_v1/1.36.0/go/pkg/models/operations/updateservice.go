package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateServiceServers = []string{
	"https://messaging.twilio.com",
}

type UpdateServicePathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateServiceRequestBodyFallbackMethodEnum string

const (
	UpdateServiceRequestBodyFallbackMethodEnumHead   UpdateServiceRequestBodyFallbackMethodEnum = "HEAD"
	UpdateServiceRequestBodyFallbackMethodEnumGet    UpdateServiceRequestBodyFallbackMethodEnum = "GET"
	UpdateServiceRequestBodyFallbackMethodEnumPost   UpdateServiceRequestBodyFallbackMethodEnum = "POST"
	UpdateServiceRequestBodyFallbackMethodEnumPatch  UpdateServiceRequestBodyFallbackMethodEnum = "PATCH"
	UpdateServiceRequestBodyFallbackMethodEnumPut    UpdateServiceRequestBodyFallbackMethodEnum = "PUT"
	UpdateServiceRequestBodyFallbackMethodEnumDelete UpdateServiceRequestBodyFallbackMethodEnum = "DELETE"
)

type UpdateServiceRequestBodyInboundMethodEnum string

const (
	UpdateServiceRequestBodyInboundMethodEnumHead   UpdateServiceRequestBodyInboundMethodEnum = "HEAD"
	UpdateServiceRequestBodyInboundMethodEnumGet    UpdateServiceRequestBodyInboundMethodEnum = "GET"
	UpdateServiceRequestBodyInboundMethodEnumPost   UpdateServiceRequestBodyInboundMethodEnum = "POST"
	UpdateServiceRequestBodyInboundMethodEnumPatch  UpdateServiceRequestBodyInboundMethodEnum = "PATCH"
	UpdateServiceRequestBodyInboundMethodEnumPut    UpdateServiceRequestBodyInboundMethodEnum = "PUT"
	UpdateServiceRequestBodyInboundMethodEnumDelete UpdateServiceRequestBodyInboundMethodEnum = "DELETE"
)

type UpdateServiceRequestBodyUpdateServiceRequest struct {
	AreaCodeGeomatch          *bool                                       `form:"name=AreaCodeGeomatch"`
	FallbackMethod            *UpdateServiceRequestBodyFallbackMethodEnum `form:"name=FallbackMethod"`
	FallbackToLongCode        *bool                                       `form:"name=FallbackToLongCode"`
	FallbackURL               *string                                     `form:"name=FallbackUrl"`
	FriendlyName              *string                                     `form:"name=FriendlyName"`
	InboundMethod             *UpdateServiceRequestBodyInboundMethodEnum  `form:"name=InboundMethod"`
	InboundRequestURL         *string                                     `form:"name=InboundRequestUrl"`
	MmsConverter              *bool                                       `form:"name=MmsConverter"`
	ScanMessageContent        *shared.ServiceEnumScanMessageContentEnum   `form:"name=ScanMessageContent"`
	SmartEncoding             *bool                                       `form:"name=SmartEncoding"`
	StatusCallback            *string                                     `form:"name=StatusCallback"`
	StickySender              *bool                                       `form:"name=StickySender"`
	SynchronousValidation     *bool                                       `form:"name=SynchronousValidation"`
	UseInboundWebhookOnNumber *bool                                       `form:"name=UseInboundWebhookOnNumber"`
	Usecase                   *string                                     `form:"name=Usecase"`
	ValidityPeriod            *int64                                      `form:"name=ValidityPeriod"`
}

type UpdateServiceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateServiceRequest struct {
	ServerURL  *string
	PathParams UpdateServicePathParams
	Request    *UpdateServiceRequestBodyUpdateServiceRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateServiceSecurity
}

type UpdateServiceResponse struct {
	ContentType        string
	StatusCode         int64
	MessagingV1Service *shared.MessagingV1Service
}
