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
	AccountSid             *string                                    `json:"account_sid,omitempty"`
	CommandsCallbackMethod *string                                    `json:"commands_callback_method,omitempty"`
	CommandsCallbackURL    *string                                    `json:"commands_callback_url,omitempty"`
	DateCreated            *time.Time                                 `json:"date_created,omitempty"`
	DateUpdated            *time.Time                                 `json:"date_updated,omitempty"`
	EID                    *string                                    `json:"e_id,omitempty"`
	FriendlyName           *string                                    `json:"friendly_name,omitempty"`
	Iccid                  *string                                    `json:"iccid,omitempty"`
	Links                  map[string]interface{}                     `json:"links,omitempty"`
	RatePlanSid            *string                                    `json:"rate_plan_sid,omitempty"`
	Sid                    *string                                    `json:"sid,omitempty"`
	SmsFallbackMethod      *PreviewWirelessSimSmsFallbackMethodEnum   `json:"sms_fallback_method,omitempty"`
	SmsFallbackURL         *string                                    `json:"sms_fallback_url,omitempty"`
	SmsMethod              *PreviewWirelessSimSmsMethodEnum           `json:"sms_method,omitempty"`
	SmsURL                 *string                                    `json:"sms_url,omitempty"`
	Status                 *string                                    `json:"status,omitempty"`
	UniqueName             *string                                    `json:"unique_name,omitempty"`
	URL                    *string                                    `json:"url,omitempty"`
	VoiceFallbackMethod    *PreviewWirelessSimVoiceFallbackMethodEnum `json:"voice_fallback_method,omitempty"`
	VoiceFallbackURL       *string                                    `json:"voice_fallback_url,omitempty"`
	VoiceMethod            *PreviewWirelessSimVoiceMethodEnum         `json:"voice_method,omitempty"`
	VoiceURL               *string                                    `json:"voice_url,omitempty"`
}
