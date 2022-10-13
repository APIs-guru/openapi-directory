package shared

type APIV2010AccountSipSipDomainVoiceFallbackMethodEnum string

const (
	APIV2010AccountSipSipDomainVoiceFallbackMethodEnumHead   APIV2010AccountSipSipDomainVoiceFallbackMethodEnum = "HEAD"
	APIV2010AccountSipSipDomainVoiceFallbackMethodEnumGet    APIV2010AccountSipSipDomainVoiceFallbackMethodEnum = "GET"
	APIV2010AccountSipSipDomainVoiceFallbackMethodEnumPost   APIV2010AccountSipSipDomainVoiceFallbackMethodEnum = "POST"
	APIV2010AccountSipSipDomainVoiceFallbackMethodEnumPatch  APIV2010AccountSipSipDomainVoiceFallbackMethodEnum = "PATCH"
	APIV2010AccountSipSipDomainVoiceFallbackMethodEnumPut    APIV2010AccountSipSipDomainVoiceFallbackMethodEnum = "PUT"
	APIV2010AccountSipSipDomainVoiceFallbackMethodEnumDelete APIV2010AccountSipSipDomainVoiceFallbackMethodEnum = "DELETE"
)

type APIV2010AccountSipSipDomainVoiceMethodEnum string

const (
	APIV2010AccountSipSipDomainVoiceMethodEnumHead   APIV2010AccountSipSipDomainVoiceMethodEnum = "HEAD"
	APIV2010AccountSipSipDomainVoiceMethodEnumGet    APIV2010AccountSipSipDomainVoiceMethodEnum = "GET"
	APIV2010AccountSipSipDomainVoiceMethodEnumPost   APIV2010AccountSipSipDomainVoiceMethodEnum = "POST"
	APIV2010AccountSipSipDomainVoiceMethodEnumPatch  APIV2010AccountSipSipDomainVoiceMethodEnum = "PATCH"
	APIV2010AccountSipSipDomainVoiceMethodEnumPut    APIV2010AccountSipSipDomainVoiceMethodEnum = "PUT"
	APIV2010AccountSipSipDomainVoiceMethodEnumDelete APIV2010AccountSipSipDomainVoiceMethodEnum = "DELETE"
)

type APIV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum string

const (
	APIV2010AccountSipSipDomainVoiceStatusCallbackMethodEnumHead   APIV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum = "HEAD"
	APIV2010AccountSipSipDomainVoiceStatusCallbackMethodEnumGet    APIV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum = "GET"
	APIV2010AccountSipSipDomainVoiceStatusCallbackMethodEnumPost   APIV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum = "POST"
	APIV2010AccountSipSipDomainVoiceStatusCallbackMethodEnumPatch  APIV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum = "PATCH"
	APIV2010AccountSipSipDomainVoiceStatusCallbackMethodEnumPut    APIV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum = "PUT"
	APIV2010AccountSipSipDomainVoiceStatusCallbackMethodEnumDelete APIV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum = "DELETE"
)

type APIV2010AccountSipSipDomain struct {
	AccountSid                *string                                                   `json:"account_sid"`
	APIVersion                *string                                                   `json:"api_version"`
	AuthType                  *string                                                   `json:"auth_type"`
	ByocTrunkSid              *string                                                   `json:"byoc_trunk_sid"`
	DateCreated               *string                                                   `json:"date_created"`
	DateUpdated               *string                                                   `json:"date_updated"`
	DomainName                *string                                                   `json:"domain_name"`
	EmergencyCallerSid        *string                                                   `json:"emergency_caller_sid"`
	EmergencyCallingEnabled   *bool                                                     `json:"emergency_calling_enabled"`
	FriendlyName              *string                                                   `json:"friendly_name"`
	Secure                    *bool                                                     `json:"secure"`
	Sid                       *string                                                   `json:"sid"`
	SipRegistration           *bool                                                     `json:"sip_registration"`
	SubresourceUris           map[string]interface{}                                    `json:"subresource_uris"`
	URI                       *string                                                   `json:"uri"`
	VoiceFallbackMethod       *APIV2010AccountSipSipDomainVoiceFallbackMethodEnum       `json:"voice_fallback_method"`
	VoiceFallbackURL          *string                                                   `json:"voice_fallback_url"`
	VoiceMethod               *APIV2010AccountSipSipDomainVoiceMethodEnum               `json:"voice_method"`
	VoiceStatusCallbackMethod *APIV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum `json:"voice_status_callback_method"`
	VoiceStatusCallbackURL    *string                                                   `json:"voice_status_callback_url"`
	VoiceURL                  *string                                                   `json:"voice_url"`
}
