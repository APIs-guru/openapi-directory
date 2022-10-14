package shared

import (
	"time"
)

type MonitorV1AlertRequestMethodEnum string

const (
	MonitorV1AlertRequestMethodEnumHead   MonitorV1AlertRequestMethodEnum = "HEAD"
	MonitorV1AlertRequestMethodEnumGet    MonitorV1AlertRequestMethodEnum = "GET"
	MonitorV1AlertRequestMethodEnumPost   MonitorV1AlertRequestMethodEnum = "POST"
	MonitorV1AlertRequestMethodEnumPatch  MonitorV1AlertRequestMethodEnum = "PATCH"
	MonitorV1AlertRequestMethodEnumPut    MonitorV1AlertRequestMethodEnum = "PUT"
	MonitorV1AlertRequestMethodEnumDelete MonitorV1AlertRequestMethodEnum = "DELETE"
)

type MonitorV1Alert struct {
	AccountSid    *string                          `json:"account_sid,omitempty"`
	AlertText     *string                          `json:"alert_text,omitempty"`
	APIVersion    *string                          `json:"api_version,omitempty"`
	DateCreated   *time.Time                       `json:"date_created,omitempty"`
	DateGenerated *time.Time                       `json:"date_generated,omitempty"`
	DateUpdated   *time.Time                       `json:"date_updated,omitempty"`
	ErrorCode     *string                          `json:"error_code,omitempty"`
	LogLevel      *string                          `json:"log_level,omitempty"`
	MoreInfo      *string                          `json:"more_info,omitempty"`
	RequestMethod *MonitorV1AlertRequestMethodEnum `json:"request_method,omitempty"`
	RequestURL    *string                          `json:"request_url,omitempty"`
	ResourceSid   *string                          `json:"resource_sid,omitempty"`
	ServiceSid    *string                          `json:"service_sid,omitempty"`
	Sid           *string                          `json:"sid,omitempty"`
	URL           *string                          `json:"url,omitempty"`
}
