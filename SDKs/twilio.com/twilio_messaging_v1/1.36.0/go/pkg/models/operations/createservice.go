package operations

import (
	"openapi/pkg/models/shared"
)

var CreateServiceServers = []string{
	"https://messaging.twilio.com",
}

type CreateServiceRequestBodyFallbackMethodEnum string

const (
	CreateServiceRequestBodyFallbackMethodEnumHead   CreateServiceRequestBodyFallbackMethodEnum = "HEAD"
	CreateServiceRequestBodyFallbackMethodEnumGet    CreateServiceRequestBodyFallbackMethodEnum = "GET"
	CreateServiceRequestBodyFallbackMethodEnumPost   CreateServiceRequestBodyFallbackMethodEnum = "POST"
	CreateServiceRequestBodyFallbackMethodEnumPatch  CreateServiceRequestBodyFallbackMethodEnum = "PATCH"
	CreateServiceRequestBodyFallbackMethodEnumPut    CreateServiceRequestBodyFallbackMethodEnum = "PUT"
	CreateServiceRequestBodyFallbackMethodEnumDelete CreateServiceRequestBodyFallbackMethodEnum = "DELETE"
)

type CreateServiceRequestBodyInboundMethodEnum string

const (
	CreateServiceRequestBodyInboundMethodEnumHead   CreateServiceRequestBodyInboundMethodEnum = "HEAD"
	CreateServiceRequestBodyInboundMethodEnumGet    CreateServiceRequestBodyInboundMethodEnum = "GET"
	CreateServiceRequestBodyInboundMethodEnumPost   CreateServiceRequestBodyInboundMethodEnum = "POST"
	CreateServiceRequestBodyInboundMethodEnumPatch  CreateServiceRequestBodyInboundMethodEnum = "PATCH"
	CreateServiceRequestBodyInboundMethodEnumPut    CreateServiceRequestBodyInboundMethodEnum = "PUT"
	CreateServiceRequestBodyInboundMethodEnumDelete CreateServiceRequestBodyInboundMethodEnum = "DELETE"
)

type CreateServiceRequestBodyCreateServiceRequest struct {
	AreaCodeGeomatch          *bool                                       `form:"name=AreaCodeGeomatch"`
	FallbackMethod            *CreateServiceRequestBodyFallbackMethodEnum `form:"name=FallbackMethod"`
	FallbackToLongCode        *bool                                       `form:"name=FallbackToLongCode"`
	FallbackURL               *string                                     `form:"name=FallbackUrl"`
	FriendlyName              string                                      `form:"name=FriendlyName"`
	InboundMethod             *CreateServiceRequestBodyInboundMethodEnum  `form:"name=InboundMethod"`
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

type CreateServiceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateServiceRequest struct {
	ServerURL *string
	Request   *CreateServiceRequestBodyCreateServiceRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateServiceSecurity
}

type CreateServiceResponse struct {
	ContentType        string
	StatusCode         int64
	MessagingV1Service *shared.MessagingV1Service
}
