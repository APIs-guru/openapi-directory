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

type UpdateServiceUpdateServiceRequestFallbackMethodEnum string

const (
	UpdateServiceUpdateServiceRequestFallbackMethodEnumHead   UpdateServiceUpdateServiceRequestFallbackMethodEnum = "HEAD"
	UpdateServiceUpdateServiceRequestFallbackMethodEnumGet    UpdateServiceUpdateServiceRequestFallbackMethodEnum = "GET"
	UpdateServiceUpdateServiceRequestFallbackMethodEnumPost   UpdateServiceUpdateServiceRequestFallbackMethodEnum = "POST"
	UpdateServiceUpdateServiceRequestFallbackMethodEnumPatch  UpdateServiceUpdateServiceRequestFallbackMethodEnum = "PATCH"
	UpdateServiceUpdateServiceRequestFallbackMethodEnumPut    UpdateServiceUpdateServiceRequestFallbackMethodEnum = "PUT"
	UpdateServiceUpdateServiceRequestFallbackMethodEnumDelete UpdateServiceUpdateServiceRequestFallbackMethodEnum = "DELETE"
)

type UpdateServiceUpdateServiceRequestInboundMethodEnum string

const (
	UpdateServiceUpdateServiceRequestInboundMethodEnumHead   UpdateServiceUpdateServiceRequestInboundMethodEnum = "HEAD"
	UpdateServiceUpdateServiceRequestInboundMethodEnumGet    UpdateServiceUpdateServiceRequestInboundMethodEnum = "GET"
	UpdateServiceUpdateServiceRequestInboundMethodEnumPost   UpdateServiceUpdateServiceRequestInboundMethodEnum = "POST"
	UpdateServiceUpdateServiceRequestInboundMethodEnumPatch  UpdateServiceUpdateServiceRequestInboundMethodEnum = "PATCH"
	UpdateServiceUpdateServiceRequestInboundMethodEnumPut    UpdateServiceUpdateServiceRequestInboundMethodEnum = "PUT"
	UpdateServiceUpdateServiceRequestInboundMethodEnumDelete UpdateServiceUpdateServiceRequestInboundMethodEnum = "DELETE"
)

type UpdateServiceUpdateServiceRequest struct {
	AreaCodeGeomatch          *bool                                                `form:"name=AreaCodeGeomatch"`
	FallbackMethod            *UpdateServiceUpdateServiceRequestFallbackMethodEnum `form:"name=FallbackMethod"`
	FallbackToLongCode        *bool                                                `form:"name=FallbackToLongCode"`
	FallbackURL               *string                                              `form:"name=FallbackUrl"`
	FriendlyName              *string                                              `form:"name=FriendlyName"`
	InboundMethod             *UpdateServiceUpdateServiceRequestInboundMethodEnum  `form:"name=InboundMethod"`
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

type UpdateServiceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateServiceRequest struct {
	ServerURL  *string
	PathParams UpdateServicePathParams
	Request    *UpdateServiceUpdateServiceRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateServiceSecurity
}

type UpdateServiceResponse struct {
	ContentType        string
	StatusCode         int64
	MessagingV1Service *shared.MessagingV1Service
}
