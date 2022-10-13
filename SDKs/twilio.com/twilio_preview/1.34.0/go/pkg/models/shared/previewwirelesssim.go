package shared

import (
	"time"
)

type PreviewWirelessSimSmsFallbackMethodEnum string

const (
	PreviewWirelessSimSmsFallbackMethodEnumHead   PreviewWirelessSimSmsFallbackMethodEnum = "HEAD"
	PreviewWirelessSimSmsFallbackMethodEnumGet    PreviewWirelessSimSmsFallbackMethodEnum = "GET"
	PreviewWirelessSimSmsFallbackMethodEnumPost   PreviewWirelessSimSmsFallbackMethodEnum = "POST"
	PreviewWirelessSimSmsFallbackMethodEnumPatch  PreviewWirelessSimSmsFallbackMethodEnum = "PATCH"
	PreviewWirelessSimSmsFallbackMethodEnumPut    PreviewWirelessSimSmsFallbackMethodEnum = "PUT"
	PreviewWirelessSimSmsFallbackMethodEnumDelete PreviewWirelessSimSmsFallbackMethodEnum = "DELETE"
)

type PreviewWirelessSimSmsMethodEnum string

const (
	PreviewWirelessSimSmsMethodEnumHead   PreviewWirelessSimSmsMethodEnum = "HEAD"
	PreviewWirelessSimSmsMethodEnumGet    PreviewWirelessSimSmsMethodEnum = "GET"
	PreviewWirelessSimSmsMethodEnumPost   PreviewWirelessSimSmsMethodEnum = "POST"
	PreviewWirelessSimSmsMethodEnumPatch  PreviewWirelessSimSmsMethodEnum = "PATCH"
	PreviewWirelessSimSmsMethodEnumPut    PreviewWirelessSimSmsMethodEnum = "PUT"
	PreviewWirelessSimSmsMethodEnumDelete PreviewWirelessSimSmsMethodEnum = "DELETE"
)

type PreviewWirelessSimVoiceFallbackMethodEnum string

const (
	PreviewWirelessSimVoiceFallbackMethodEnumHead   PreviewWirelessSimVoiceFallbackMethodEnum = "HEAD"
	PreviewWirelessSimVoiceFallbackMethodEnumGet    PreviewWirelessSimVoiceFallbackMethodEnum = "GET"
	PreviewWirelessSimVoiceFallbackMethodEnumPost   PreviewWirelessSimVoiceFallbackMethodEnum = "POST"
	PreviewWirelessSimVoiceFallbackMethodEnumPatch  PreviewWirelessSimVoiceFallbackMethodEnum = "PATCH"
	PreviewWirelessSimVoiceFallbackMethodEnumPut    PreviewWirelessSimVoiceFallbackMethodEnum = "PUT"
	PreviewWirelessSimVoiceFallbackMethodEnumDelete PreviewWirelessSimVoiceFallbackMethodEnum = "DELETE"
)

type PreviewWirelessSimVoiceMethodEnum string

const (
	PreviewWirelessSimVoiceMethodEnumHead   PreviewWirelessSimVoiceMethodEnum = "HEAD"
	PreviewWirelessSimVoiceMethodEnumGet    PreviewWirelessSimVoiceMethodEnum = "GET"
	PreviewWirelessSimVoiceMethodEnumPost   PreviewWirelessSimVoiceMethodEnum = "POST"
	PreviewWirelessSimVoiceMethodEnumPatch  PreviewWirelessSimVoiceMethodEnum = "PATCH"
	PreviewWirelessSimVoiceMethodEnumPut    PreviewWirelessSimVoiceMethodEnum = "PUT"
	PreviewWirelessSimVoiceMethodEnumDelete PreviewWirelessSimVoiceMethodEnum = "DELETE"
)

type PreviewWirelessSim struct {
	AccountSid             *string                                    `json:"account_sid"`
	CommandsCallbackMethod *string                                    `json:"commands_callback_method"`
	CommandsCallbackURL    *string                                    `json:"commands_callback_url"`
	DateCreated            *time.Time                                 `json:"date_created"`
	DateUpdated            *time.Time                                 `json:"date_updated"`
	EID                    *string                                    `json:"e_id"`
	FriendlyName           *string                                    `json:"friendly_name"`
	Iccid                  *string                                    `json:"iccid"`
	Links                  map[string]interface{}                     `json:"links"`
	RatePlanSid            *string                                    `json:"rate_plan_sid"`
	Sid                    *string                                    `json:"sid"`
	SmsFallbackMethod      *PreviewWirelessSimSmsFallbackMethodEnum   `json:"sms_fallback_method"`
	SmsFallbackURL         *string                                    `json:"sms_fallback_url"`
	SmsMethod              *PreviewWirelessSimSmsMethodEnum           `json:"sms_method"`
	SmsURL                 *string                                    `json:"sms_url"`
	Status                 *string                                    `json:"status"`
	UniqueName             *string                                    `json:"unique_name"`
	URL                    *string                                    `json:"url"`
	VoiceFallbackMethod    *PreviewWirelessSimVoiceFallbackMethodEnum `json:"voice_fallback_method"`
	VoiceFallbackURL       *string                                    `json:"voice_fallback_url"`
	VoiceMethod            *PreviewWirelessSimVoiceMethodEnum         `json:"voice_method"`
	VoiceURL               *string                                    `json:"voice_url"`
}
