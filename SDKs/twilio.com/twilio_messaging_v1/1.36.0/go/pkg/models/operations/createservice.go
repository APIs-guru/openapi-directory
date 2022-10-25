package operations

import (
	"openapi/pkg/models/shared"
)

var CreateServiceServers = []string{
	"https://messaging.twilio.com",
}

type CreateServiceCreateServiceRequestFallbackMethodEnum string

const (
	CreateServiceCreateServiceRequestFallbackMethodEnumHead   CreateServiceCreateServiceRequestFallbackMethodEnum = "HEAD"
	CreateServiceCreateServiceRequestFallbackMethodEnumGet    CreateServiceCreateServiceRequestFallbackMethodEnum = "GET"
	CreateServiceCreateServiceRequestFallbackMethodEnumPost   CreateServiceCreateServiceRequestFallbackMethodEnum = "POST"
	CreateServiceCreateServiceRequestFallbackMethodEnumPatch  CreateServiceCreateServiceRequestFallbackMethodEnum = "PATCH"
	CreateServiceCreateServiceRequestFallbackMethodEnumPut    CreateServiceCreateServiceRequestFallbackMethodEnum = "PUT"
	CreateServiceCreateServiceRequestFallbackMethodEnumDelete CreateServiceCreateServiceRequestFallbackMethodEnum = "DELETE"
)

type CreateServiceCreateServiceRequestInboundMethodEnum string

const (
	CreateServiceCreateServiceRequestInboundMethodEnumHead   CreateServiceCreateServiceRequestInboundMethodEnum = "HEAD"
	CreateServiceCreateServiceRequestInboundMethodEnumGet    CreateServiceCreateServiceRequestInboundMethodEnum = "GET"
	CreateServiceCreateServiceRequestInboundMethodEnumPost   CreateServiceCreateServiceRequestInboundMethodEnum = "POST"
	CreateServiceCreateServiceRequestInboundMethodEnumPatch  CreateServiceCreateServiceRequestInboundMethodEnum = "PATCH"
	CreateServiceCreateServiceRequestInboundMethodEnumPut    CreateServiceCreateServiceRequestInboundMethodEnum = "PUT"
	CreateServiceCreateServiceRequestInboundMethodEnumDelete CreateServiceCreateServiceRequestInboundMethodEnum = "DELETE"
)

type CreateServiceCreateServiceRequest struct {
	AreaCodeGeomatch          *bool                                                `form:"name=AreaCodeGeomatch"`
	FallbackMethod            *CreateServiceCreateServiceRequestFallbackMethodEnum `form:"name=FallbackMethod"`
	FallbackToLongCode        *bool                                                `form:"name=FallbackToLongCode"`
	FallbackURL               *string                                              `form:"name=FallbackUrl"`
	FriendlyName              string                                               `form:"name=FriendlyName"`
	InboundMethod             *CreateServiceCreateServiceRequestInboundMethodEnum  `form:"name=InboundMethod"`
	InboundRequestURL         *string                                              `form:"name=InboundRequestUrl"`
	MmsConverter              *bool                                                `form:"name=MmsConverter"`
	ScanMessageContent        *shared.ServiceEnumScanMessageContentEnum            `form:"name=ScanMessageContent"`
	SmartEncoding             *bool                                                `form:"name=SmartEncoding"`
	StatusCallback            *string                                              `form:"name=StatusCallback"`
	StickySender              *bool                                                `form:"name=StickySender"`
	SynchronousValidation     *bool                                                `form:"name=SynchronousValidation"`
	UseInboundWebhookOnNumber *bool                                                `form:"name=UseInboundWebhookOnNumber"`
	Usecase                   *string                                              `form:"name=Usecase"`
	ValidityPeriod            *int64                                               `form:"name=ValidityPeriod"`
}

type CreateServiceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateServiceRequest struct {
	ServerURL *string
	Request   *CreateServiceCreateServiceRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateServiceSecurity
}

type CreateServiceResponse struct {
	ContentType        string
	StatusCode         int64
	MessagingV1Service *shared.MessagingV1Service
}
