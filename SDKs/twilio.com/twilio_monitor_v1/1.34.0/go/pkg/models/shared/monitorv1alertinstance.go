package shared

import (
	"time"
)

type MonitorV1AlertInstanceRequestMethodEnum string

const (
	MonitorV1AlertInstanceRequestMethodEnumHead   MonitorV1AlertInstanceRequestMethodEnum = "HEAD"
	MonitorV1AlertInstanceRequestMethodEnumGet    MonitorV1AlertInstanceRequestMethodEnum = "GET"
	MonitorV1AlertInstanceRequestMethodEnumPost   MonitorV1AlertInstanceRequestMethodEnum = "POST"
	MonitorV1AlertInstanceRequestMethodEnumPatch  MonitorV1AlertInstanceRequestMethodEnum = "PATCH"
	MonitorV1AlertInstanceRequestMethodEnumPut    MonitorV1AlertInstanceRequestMethodEnum = "PUT"
	MonitorV1AlertInstanceRequestMethodEnumDelete MonitorV1AlertInstanceRequestMethodEnum = "DELETE"
)

type MonitorV1AlertInstance struct {
	AccountSid       *string                                  `json:"account_sid"`
	AlertText        *string                                  `json:"alert_text"`
	APIVersion       *string                                  `json:"api_version"`
	DateCreated      *time.Time                               `json:"date_created"`
	DateGenerated    *time.Time                               `json:"date_generated"`
	DateUpdated      *time.Time                               `json:"date_updated"`
	ErrorCode        *string                                  `json:"error_code"`
	LogLevel         *string                                  `json:"log_level"`
	MoreInfo         *string                                  `json:"more_info"`
	RequestHeaders   *string                                  `json:"request_headers"`
	RequestMethod    *MonitorV1AlertInstanceRequestMethodEnum `json:"request_method"`
	RequestURL       *string                                  `json:"request_url"`
	RequestVariables *string                                  `json:"request_variables"`
	ResourceSid      *string                                  `json:"resource_sid"`
	ResponseBody     *string                                  `json:"response_body"`
	ResponseHeaders  *string                                  `json:"response_headers"`
	ServiceSid       *string                                  `json:"service_sid"`
	Sid              *string                                  `json:"sid"`
	URL              *string                                  `json:"url"`
}
