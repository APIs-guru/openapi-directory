package shared

import (
"time")


type MonitorV1AlertInstanceRequestMethodEnum string

const (
    MonitorV1AlertInstanceRequestMethodEnumHead MonitorV1AlertInstanceRequestMethodEnum = "HEAD"
MonitorV1AlertInstanceRequestMethodEnumGet MonitorV1AlertInstanceRequestMethodEnum = "GET"
MonitorV1AlertInstanceRequestMethodEnumPost MonitorV1AlertInstanceRequestMethodEnum = "POST"
MonitorV1AlertInstanceRequestMethodEnumPatch MonitorV1AlertInstanceRequestMethodEnum = "PATCH"
MonitorV1AlertInstanceRequestMethodEnumPut MonitorV1AlertInstanceRequestMethodEnum = "PUT"
MonitorV1AlertInstanceRequestMethodEnumDelete MonitorV1AlertInstanceRequestMethodEnum = "DELETE"
)


type MonitorV1AlertInstance struct {
    AccountSid *string `json:"account_sid,omitempty"`
    AlertText *string `json:"alert_text,omitempty"`
    APIVersion *string `json:"api_version,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateGenerated *time.Time `json:"date_generated,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    ErrorCode *string `json:"error_code,omitempty"`
    LogLevel *string `json:"log_level,omitempty"`
    MoreInfo *string `json:"more_info,omitempty"`
    RequestHeaders *string `json:"request_headers,omitempty"`
    RequestMethod *MonitorV1AlertInstanceRequestMethodEnum `json:"request_method,omitempty"`
    RequestURL *string `json:"request_url,omitempty"`
    RequestVariables *string `json:"request_variables,omitempty"`
    ResourceSid *string `json:"resource_sid,omitempty"`
    ResponseBody *string `json:"response_body,omitempty"`
    ResponseHeaders *string `json:"response_headers,omitempty"`
    ServiceSid *string `json:"service_sid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

