package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateServiceServers = []string{
	"https://proxy.twilio.com",
}

type UpdateServicePathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateServiceUpdateServiceRequest struct {
	CallbackURL             *string                                        `form:"name=CallbackUrl"`
	ChatInstanceSid         *string                                        `form:"name=ChatInstanceSid"`
	DefaultTTL              *int64                                         `form:"name=DefaultTtl"`
	GeoMatchLevel           *shared.ServiceEnumGeoMatchLevelEnum           `form:"name=GeoMatchLevel"`
	InterceptCallbackURL    *string                                        `form:"name=InterceptCallbackUrl"`
	NumberSelectionBehavior *shared.ServiceEnumNumberSelectionBehaviorEnum `form:"name=NumberSelectionBehavior"`
	OutOfSessionCallbackURL *string                                        `form:"name=OutOfSessionCallbackUrl"`
	UniqueName              *string                                        `form:"name=UniqueName"`
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
	ContentType    string
	StatusCode     int64
	ProxyV1Service *shared.ProxyV1Service
}
