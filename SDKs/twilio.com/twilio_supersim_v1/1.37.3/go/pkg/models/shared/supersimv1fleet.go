package shared

import (
	"time"
)

type SupersimV1FleetIPCommandsMethodEnum string

const (
	SupersimV1FleetIPCommandsMethodEnumHead   SupersimV1FleetIPCommandsMethodEnum = "HEAD"
	SupersimV1FleetIPCommandsMethodEnumGet    SupersimV1FleetIPCommandsMethodEnum = "GET"
	SupersimV1FleetIPCommandsMethodEnumPost   SupersimV1FleetIPCommandsMethodEnum = "POST"
	SupersimV1FleetIPCommandsMethodEnumPatch  SupersimV1FleetIPCommandsMethodEnum = "PATCH"
	SupersimV1FleetIPCommandsMethodEnumPut    SupersimV1FleetIPCommandsMethodEnum = "PUT"
	SupersimV1FleetIPCommandsMethodEnumDelete SupersimV1FleetIPCommandsMethodEnum = "DELETE"
)

type SupersimV1FleetSmsCommandsMethodEnum string

const (
	SupersimV1FleetSmsCommandsMethodEnumHead   SupersimV1FleetSmsCommandsMethodEnum = "HEAD"
	SupersimV1FleetSmsCommandsMethodEnumGet    SupersimV1FleetSmsCommandsMethodEnum = "GET"
	SupersimV1FleetSmsCommandsMethodEnumPost   SupersimV1FleetSmsCommandsMethodEnum = "POST"
	SupersimV1FleetSmsCommandsMethodEnumPatch  SupersimV1FleetSmsCommandsMethodEnum = "PATCH"
	SupersimV1FleetSmsCommandsMethodEnumPut    SupersimV1FleetSmsCommandsMethodEnum = "PUT"
	SupersimV1FleetSmsCommandsMethodEnumDelete SupersimV1FleetSmsCommandsMethodEnum = "DELETE"
)

type SupersimV1Fleet struct {
	AccountSid              *string                               `json:"account_sid,omitempty"`
	DataEnabled             *bool                                 `json:"data_enabled,omitempty"`
	DataLimit               *int64                                `json:"data_limit,omitempty"`
	DataMetering            *FleetEnumDataMeteringEnum            `json:"data_metering,omitempty"`
	DateCreated             *time.Time                            `json:"date_created,omitempty"`
	DateUpdated             *time.Time                            `json:"date_updated,omitempty"`
	IPCommandsMethod        *SupersimV1FleetIPCommandsMethodEnum  `json:"ip_commands_method,omitempty"`
	IPCommandsURL           *string                               `json:"ip_commands_url,omitempty"`
	NetworkAccessProfileSid *string                               `json:"network_access_profile_sid,omitempty"`
	Sid                     *string                               `json:"sid,omitempty"`
	SmsCommandsEnabled      *bool                                 `json:"sms_commands_enabled,omitempty"`
	SmsCommandsMethod       *SupersimV1FleetSmsCommandsMethodEnum `json:"sms_commands_method,omitempty"`
	SmsCommandsURL          *string                               `json:"sms_commands_url,omitempty"`
	UniqueName              *string                               `json:"unique_name,omitempty"`
	URL                     *string                               `json:"url,omitempty"`
}
