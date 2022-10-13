package shared

import (
	"time"
)

type VoiceV1ByocTrunkStatusCallbackMethodEnum string

const (
	VoiceV1ByocTrunkStatusCallbackMethodEnumHead   VoiceV1ByocTrunkStatusCallbackMethodEnum = "HEAD"
	VoiceV1ByocTrunkStatusCallbackMethodEnumGet    VoiceV1ByocTrunkStatusCallbackMethodEnum = "GET"
	VoiceV1ByocTrunkStatusCallbackMethodEnumPost   VoiceV1ByocTrunkStatusCallbackMethodEnum = "POST"
	VoiceV1ByocTrunkStatusCallbackMethodEnumPatch  VoiceV1ByocTrunkStatusCallbackMethodEnum = "PATCH"
	VoiceV1ByocTrunkStatusCallbackMethodEnumPut    VoiceV1ByocTrunkStatusCallbackMethodEnum = "PUT"
	VoiceV1ByocTrunkStatusCallbackMethodEnumDelete VoiceV1ByocTrunkStatusCallbackMethodEnum = "DELETE"
)

type VoiceV1ByocTrunkVoiceFallbackMethodEnum string

const (
	VoiceV1ByocTrunkVoiceFallbackMethodEnumHead   VoiceV1ByocTrunkVoiceFallbackMethodEnum = "HEAD"
	VoiceV1ByocTrunkVoiceFallbackMethodEnumGet    VoiceV1ByocTrunkVoiceFallbackMethodEnum = "GET"
	VoiceV1ByocTrunkVoiceFallbackMethodEnumPost   VoiceV1ByocTrunkVoiceFallbackMethodEnum = "POST"
	VoiceV1ByocTrunkVoiceFallbackMethodEnumPatch  VoiceV1ByocTrunkVoiceFallbackMethodEnum = "PATCH"
	VoiceV1ByocTrunkVoiceFallbackMethodEnumPut    VoiceV1ByocTrunkVoiceFallbackMethodEnum = "PUT"
	VoiceV1ByocTrunkVoiceFallbackMethodEnumDelete VoiceV1ByocTrunkVoiceFallbackMethodEnum = "DELETE"
)

type VoiceV1ByocTrunkVoiceMethodEnum string

const (
	VoiceV1ByocTrunkVoiceMethodEnumHead   VoiceV1ByocTrunkVoiceMethodEnum = "HEAD"
	VoiceV1ByocTrunkVoiceMethodEnumGet    VoiceV1ByocTrunkVoiceMethodEnum = "GET"
	VoiceV1ByocTrunkVoiceMethodEnumPost   VoiceV1ByocTrunkVoiceMethodEnum = "POST"
	VoiceV1ByocTrunkVoiceMethodEnumPatch  VoiceV1ByocTrunkVoiceMethodEnum = "PATCH"
	VoiceV1ByocTrunkVoiceMethodEnumPut    VoiceV1ByocTrunkVoiceMethodEnum = "PUT"
	VoiceV1ByocTrunkVoiceMethodEnumDelete VoiceV1ByocTrunkVoiceMethodEnum = "DELETE"
)

type VoiceV1ByocTrunk struct {
	AccountSid           *string                                   `json:"account_sid"`
	CnamLookupEnabled    *bool                                     `json:"cnam_lookup_enabled"`
	ConnectionPolicySid  *string                                   `json:"connection_policy_sid"`
	DateCreated          *time.Time                                `json:"date_created"`
	DateUpdated          *time.Time                                `json:"date_updated"`
	FriendlyName         *string                                   `json:"friendly_name"`
	FromDomainSid        *string                                   `json:"from_domain_sid"`
	Sid                  *string                                   `json:"sid"`
	StatusCallbackMethod *VoiceV1ByocTrunkStatusCallbackMethodEnum `json:"status_callback_method"`
	StatusCallbackURL    *string                                   `json:"status_callback_url"`
	URL                  *string                                   `json:"url"`
	VoiceFallbackMethod  *VoiceV1ByocTrunkVoiceFallbackMethodEnum  `json:"voice_fallback_method"`
	VoiceFallbackURL     *string                                   `json:"voice_fallback_url"`
	VoiceMethod          *VoiceV1ByocTrunkVoiceMethodEnum          `json:"voice_method"`
	VoiceURL             *string                                   `json:"voice_url"`
}
