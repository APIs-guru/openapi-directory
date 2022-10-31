package shared

import (
"time")


type TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnum string

const (
    TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnumHead TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnum = "HEAD"
TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnumGet TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnum = "GET"
TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnumPost TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnum = "POST"
TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnumPatch TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnum = "PATCH"
TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnumPut TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnum = "PUT"
TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnumDelete TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnum = "DELETE"
)



type TrunkingV1TrunkPhoneNumberSmsMethodEnum string

const (
    TrunkingV1TrunkPhoneNumberSmsMethodEnumHead TrunkingV1TrunkPhoneNumberSmsMethodEnum = "HEAD"
TrunkingV1TrunkPhoneNumberSmsMethodEnumGet TrunkingV1TrunkPhoneNumberSmsMethodEnum = "GET"
TrunkingV1TrunkPhoneNumberSmsMethodEnumPost TrunkingV1TrunkPhoneNumberSmsMethodEnum = "POST"
TrunkingV1TrunkPhoneNumberSmsMethodEnumPatch TrunkingV1TrunkPhoneNumberSmsMethodEnum = "PATCH"
TrunkingV1TrunkPhoneNumberSmsMethodEnumPut TrunkingV1TrunkPhoneNumberSmsMethodEnum = "PUT"
TrunkingV1TrunkPhoneNumberSmsMethodEnumDelete TrunkingV1TrunkPhoneNumberSmsMethodEnum = "DELETE"
)



type TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnum string

const (
    TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnumHead TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnum = "HEAD"
TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnumGet TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnum = "GET"
TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnumPost TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnum = "POST"
TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnumPatch TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnum = "PATCH"
TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnumPut TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnum = "PUT"
TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnumDelete TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnum = "DELETE"
)



type TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnum string

const (
    TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnumHead TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnum = "HEAD"
TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnumGet TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnum = "GET"
TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnumPost TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnum = "POST"
TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnumPatch TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnum = "PATCH"
TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnumPut TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnum = "PUT"
TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnumDelete TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnum = "DELETE"
)



type TrunkingV1TrunkPhoneNumberVoiceMethodEnum string

const (
    TrunkingV1TrunkPhoneNumberVoiceMethodEnumHead TrunkingV1TrunkPhoneNumberVoiceMethodEnum = "HEAD"
TrunkingV1TrunkPhoneNumberVoiceMethodEnumGet TrunkingV1TrunkPhoneNumberVoiceMethodEnum = "GET"
TrunkingV1TrunkPhoneNumberVoiceMethodEnumPost TrunkingV1TrunkPhoneNumberVoiceMethodEnum = "POST"
TrunkingV1TrunkPhoneNumberVoiceMethodEnumPatch TrunkingV1TrunkPhoneNumberVoiceMethodEnum = "PATCH"
TrunkingV1TrunkPhoneNumberVoiceMethodEnumPut TrunkingV1TrunkPhoneNumberVoiceMethodEnum = "PUT"
TrunkingV1TrunkPhoneNumberVoiceMethodEnumDelete TrunkingV1TrunkPhoneNumberVoiceMethodEnum = "DELETE"
)


type TrunkingV1TrunkPhoneNumber struct {
    AccountSid *string `json:"account_sid,omitempty"`
    AddressRequirements *PhoneNumberEnumAddressRequirementEnum `json:"address_requirements,omitempty"`
    APIVersion *string `json:"api_version,omitempty"`
    Beta *bool `json:"beta,omitempty"`
    Capabilities map[string]interface{} `json:"capabilities,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    FriendlyName *string `json:"friendly_name,omitempty"`
    Links map[string]interface{} `json:"links,omitempty"`
    PhoneNumber *string `json:"phone_number,omitempty"`
    Sid *string `json:"sid,omitempty"`
    SmsApplicationSid *string `json:"sms_application_sid,omitempty"`
    SmsFallbackMethod *TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnum `json:"sms_fallback_method,omitempty"`
    SmsFallbackURL *string `json:"sms_fallback_url,omitempty"`
    SmsMethod *TrunkingV1TrunkPhoneNumberSmsMethodEnum `json:"sms_method,omitempty"`
    SmsURL *string `json:"sms_url,omitempty"`
    StatusCallback *string `json:"status_callback,omitempty"`
    StatusCallbackMethod *TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnum `json:"status_callback_method,omitempty"`
    TrunkSid *string `json:"trunk_sid,omitempty"`
    URL *string `json:"url,omitempty"`
    VoiceApplicationSid *string `json:"voice_application_sid,omitempty"`
    VoiceCallerIDLookup *bool `json:"voice_caller_id_lookup,omitempty"`
    VoiceFallbackMethod *TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnum `json:"voice_fallback_method,omitempty"`
    VoiceFallbackURL *string `json:"voice_fallback_url,omitempty"`
    VoiceMethod *TrunkingV1TrunkPhoneNumberVoiceMethodEnum `json:"voice_method,omitempty"`
    VoiceURL *string `json:"voice_url,omitempty"`
    
}

