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
	AccountSid    *string                          `json:"account_sid"`
	AlertText     *string                          `json:"alert_text"`
	APIVersion    *string                          `json:"api_version"`
	DateCreated   *time.Time                       `json:"date_created"`
	DateGenerated *time.Time                       `json:"date_generated"`
	DateUpdated   *time.Time                       `json:"date_updated"`
	ErrorCode     *string                          `json:"error_code"`
	LogLevel      *string                          `json:"log_level"`
	MoreInfo      *string                          `json:"more_info"`
	RequestMethod *MonitorV1AlertRequestMethodEnum `json:"request_method"`
	RequestURL    *string                          `json:"request_url"`
	ResourceSid   *string                          `json:"resource_sid"`
	ServiceSid    *string                          `json:"service_sid"`
	Sid           *string                          `json:"sid"`
	URL           *string                          `json:"url"`
}
