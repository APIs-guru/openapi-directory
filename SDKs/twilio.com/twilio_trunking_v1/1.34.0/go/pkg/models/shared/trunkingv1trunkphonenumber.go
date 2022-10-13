package shared

import (
	"time"
)

type TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnum string

const (
	TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnumHead   TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnum = "HEAD"
	TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnumGet    TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnum = "GET"
	TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnumPost   TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnum = "POST"
	TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnumPatch  TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnum = "PATCH"
	TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnumPut    TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnum = "PUT"
	TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnumDelete TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnum = "DELETE"
)

type TrunkingV1TrunkPhoneNumberSmsMethodEnum string

const (
	TrunkingV1TrunkPhoneNumberSmsMethodEnumHead   TrunkingV1TrunkPhoneNumberSmsMethodEnum = "HEAD"
	TrunkingV1TrunkPhoneNumberSmsMethodEnumGet    TrunkingV1TrunkPhoneNumberSmsMethodEnum = "GET"
	TrunkingV1TrunkPhoneNumberSmsMethodEnumPost   TrunkingV1TrunkPhoneNumberSmsMethodEnum = "POST"
	TrunkingV1TrunkPhoneNumberSmsMethodEnumPatch  TrunkingV1TrunkPhoneNumberSmsMethodEnum = "PATCH"
	TrunkingV1TrunkPhoneNumberSmsMethodEnumPut    TrunkingV1TrunkPhoneNumberSmsMethodEnum = "PUT"
	TrunkingV1TrunkPhoneNumberSmsMethodEnumDelete TrunkingV1TrunkPhoneNumberSmsMethodEnum = "DELETE"
)

type TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnum string

const (
	TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnumHead   TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnum = "HEAD"
	TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnumGet    TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnum = "GET"
	TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnumPost   TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnum = "POST"
	TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnumPatch  TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnum = "PATCH"
	TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnumPut    TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnum = "PUT"
	TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnumDelete TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnum = "DELETE"
)

type TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnum string

const (
	TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnumHead   TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnum = "HEAD"
	TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnumGet    TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnum = "GET"
	TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnumPost   TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnum = "POST"
	TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnumPatch  TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnum = "PATCH"
	TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnumPut    TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnum = "PUT"
	TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnumDelete TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnum = "DELETE"
)

type TrunkingV1TrunkPhoneNumberVoiceMethodEnum string

const (
	TrunkingV1TrunkPhoneNumberVoiceMethodEnumHead   TrunkingV1TrunkPhoneNumberVoiceMethodEnum = "HEAD"
	TrunkingV1TrunkPhoneNumberVoiceMethodEnumGet    TrunkingV1TrunkPhoneNumberVoiceMethodEnum = "GET"
	TrunkingV1TrunkPhoneNumberVoiceMethodEnumPost   TrunkingV1TrunkPhoneNumberVoiceMethodEnum = "POST"
	TrunkingV1TrunkPhoneNumberVoiceMethodEnumPatch  TrunkingV1TrunkPhoneNumberVoiceMethodEnum = "PATCH"
	TrunkingV1TrunkPhoneNumberVoiceMethodEnumPut    TrunkingV1TrunkPhoneNumberVoiceMethodEnum = "PUT"
	TrunkingV1TrunkPhoneNumberVoiceMethodEnumDelete TrunkingV1TrunkPhoneNumberVoiceMethodEnum = "DELETE"
)

type TrunkingV1TrunkPhoneNumber struct {
	AccountSid           *string                                             `json:"account_sid"`
	AddressRequirements  *PhoneNumberEnumAddressRequirementEnum              `json:"address_requirements"`
	APIVersion           *string                                             `json:"api_version"`
	Beta                 *bool                                               `json:"beta"`
	Capabilities         map[string]interface{}                              `json:"capabilities"`
	DateCreated          *time.Time                                          `json:"date_created"`
	DateUpdated          *time.Time                                          `json:"date_updated"`
	FriendlyName         *string                                             `json:"friendly_name"`
	Links                map[string]interface{}                              `json:"links"`
	PhoneNumber          *string                                             `json:"phone_number"`
	Sid                  *string                                             `json:"sid"`
	SmsApplicationSid    *string                                             `json:"sms_application_sid"`
	SmsFallbackMethod    *TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnum    `json:"sms_fallback_method"`
	SmsFallbackURL       *string                                             `json:"sms_fallback_url"`
	SmsMethod            *TrunkingV1TrunkPhoneNumberSmsMethodEnum            `json:"sms_method"`
	SmsURL               *string                                             `json:"sms_url"`
	StatusCallback       *string                                             `json:"status_callback"`
	StatusCallbackMethod *TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnum `json:"status_callback_method"`
	TrunkSid             *string                                             `json:"trunk_sid"`
	URL                  *string                                             `json:"url"`
	VoiceApplicationSid  *string                                             `json:"voice_application_sid"`
	VoiceCallerIDLookup  *bool                                               `json:"voice_caller_id_lookup"`
	VoiceFallbackMethod  *TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnum  `json:"voice_fallback_method"`
	VoiceFallbackURL     *string                                             `json:"voice_fallback_url"`
	VoiceMethod          *TrunkingV1TrunkPhoneNumberVoiceMethodEnum          `json:"voice_method"`
	VoiceURL             *string                                             `json:"voice_url"`
}
