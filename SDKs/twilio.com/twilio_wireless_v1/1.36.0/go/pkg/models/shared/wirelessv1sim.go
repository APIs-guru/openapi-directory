package shared

import (
	"time"
)

type WirelessV1SimCommandsCallbackMethodEnum string

const (
	WirelessV1SimCommandsCallbackMethodEnumHead   WirelessV1SimCommandsCallbackMethodEnum = "HEAD"
	WirelessV1SimCommandsCallbackMethodEnumGet    WirelessV1SimCommandsCallbackMethodEnum = "GET"
	WirelessV1SimCommandsCallbackMethodEnumPost   WirelessV1SimCommandsCallbackMethodEnum = "POST"
	WirelessV1SimCommandsCallbackMethodEnumPatch  WirelessV1SimCommandsCallbackMethodEnum = "PATCH"
	WirelessV1SimCommandsCallbackMethodEnumPut    WirelessV1SimCommandsCallbackMethodEnum = "PUT"
	WirelessV1SimCommandsCallbackMethodEnumDelete WirelessV1SimCommandsCallbackMethodEnum = "DELETE"
)

type WirelessV1SimSmsFallbackMethodEnum string

const (
	WirelessV1SimSmsFallbackMethodEnumHead   WirelessV1SimSmsFallbackMethodEnum = "HEAD"
	WirelessV1SimSmsFallbackMethodEnumGet    WirelessV1SimSmsFallbackMethodEnum = "GET"
	WirelessV1SimSmsFallbackMethodEnumPost   WirelessV1SimSmsFallbackMethodEnum = "POST"
	WirelessV1SimSmsFallbackMethodEnumPatch  WirelessV1SimSmsFallbackMethodEnum = "PATCH"
	WirelessV1SimSmsFallbackMethodEnumPut    WirelessV1SimSmsFallbackMethodEnum = "PUT"
	WirelessV1SimSmsFallbackMethodEnumDelete WirelessV1SimSmsFallbackMethodEnum = "DELETE"
)

type WirelessV1SimSmsMethodEnum string

const (
	WirelessV1SimSmsMethodEnumHead   WirelessV1SimSmsMethodEnum = "HEAD"
	WirelessV1SimSmsMethodEnumGet    WirelessV1SimSmsMethodEnum = "GET"
	WirelessV1SimSmsMethodEnumPost   WirelessV1SimSmsMethodEnum = "POST"
	WirelessV1SimSmsMethodEnumPatch  WirelessV1SimSmsMethodEnum = "PATCH"
	WirelessV1SimSmsMethodEnumPut    WirelessV1SimSmsMethodEnum = "PUT"
	WirelessV1SimSmsMethodEnumDelete WirelessV1SimSmsMethodEnum = "DELETE"
)

type WirelessV1SimVoiceFallbackMethodEnum string

const (
	WirelessV1SimVoiceFallbackMethodEnumHead   WirelessV1SimVoiceFallbackMethodEnum = "HEAD"
	WirelessV1SimVoiceFallbackMethodEnumGet    WirelessV1SimVoiceFallbackMethodEnum = "GET"
	WirelessV1SimVoiceFallbackMethodEnumPost   WirelessV1SimVoiceFallbackMethodEnum = "POST"
	WirelessV1SimVoiceFallbackMethodEnumPatch  WirelessV1SimVoiceFallbackMethodEnum = "PATCH"
	WirelessV1SimVoiceFallbackMethodEnumPut    WirelessV1SimVoiceFallbackMethodEnum = "PUT"
	WirelessV1SimVoiceFallbackMethodEnumDelete WirelessV1SimVoiceFallbackMethodEnum = "DELETE"
)

type WirelessV1SimVoiceMethodEnum string

const (
	WirelessV1SimVoiceMethodEnumHead   WirelessV1SimVoiceMethodEnum = "HEAD"
	WirelessV1SimVoiceMethodEnumGet    WirelessV1SimVoiceMethodEnum = "GET"
	WirelessV1SimVoiceMethodEnumPost   WirelessV1SimVoiceMethodEnum = "POST"
	WirelessV1SimVoiceMethodEnumPatch  WirelessV1SimVoiceMethodEnum = "PATCH"
	WirelessV1SimVoiceMethodEnumPut    WirelessV1SimVoiceMethodEnum = "PUT"
	WirelessV1SimVoiceMethodEnumDelete WirelessV1SimVoiceMethodEnum = "DELETE"
)

type WirelessV1Sim struct {
	AccountSid             *string                                  `json:"account_sid"`
	CommandsCallbackMethod *WirelessV1SimCommandsCallbackMethodEnum `json:"commands_callback_method"`
	CommandsCallbackURL    *string                                  `json:"commands_callback_url"`
	DateCreated            *time.Time                               `json:"date_created"`
	DateUpdated            *time.Time                               `json:"date_updated"`
	EID                    *string                                  `json:"e_id"`
	FriendlyName           *string                                  `json:"friendly_name"`
	Iccid                  *string                                  `json:"iccid"`
	IPAddress              *string                                  `json:"ip_address"`
	Links                  map[string]interface{}                   `json:"links"`
	RatePlanSid            *string                                  `json:"rate_plan_sid"`
	ResetStatus            *SimEnumResetStatusEnum                  `json:"reset_status"`
	Sid                    *string                                  `json:"sid"`
	SmsFallbackMethod      *WirelessV1SimSmsFallbackMethodEnum      `json:"sms_fallback_method"`
	SmsFallbackURL         *string                                  `json:"sms_fallback_url"`
	SmsMethod              *WirelessV1SimSmsMethodEnum              `json:"sms_method"`
	SmsURL                 *string                                  `json:"sms_url"`
	Status                 *SimEnumStatusEnum                       `json:"status"`
	UniqueName             *string                                  `json:"unique_name"`
	URL                    *string                                  `json:"url"`
	VoiceFallbackMethod    *WirelessV1SimVoiceFallbackMethodEnum    `json:"voice_fallback_method"`
	VoiceFallbackURL       *string                                  `json:"voice_fallback_url"`
	VoiceMethod            *WirelessV1SimVoiceMethodEnum            `json:"voice_method"`
	VoiceURL               *string                                  `json:"voice_url"`
}
