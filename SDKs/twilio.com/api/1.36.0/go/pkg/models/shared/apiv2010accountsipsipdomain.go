package shared




type APIV2010AccountSipSipDomainVoiceFallbackMethodEnum string

const (
    APIV2010AccountSipSipDomainVoiceFallbackMethodEnumHead APIV2010AccountSipSipDomainVoiceFallbackMethodEnum = "HEAD"
APIV2010AccountSipSipDomainVoiceFallbackMethodEnumGet APIV2010AccountSipSipDomainVoiceFallbackMethodEnum = "GET"
APIV2010AccountSipSipDomainVoiceFallbackMethodEnumPost APIV2010AccountSipSipDomainVoiceFallbackMethodEnum = "POST"
APIV2010AccountSipSipDomainVoiceFallbackMethodEnumPatch APIV2010AccountSipSipDomainVoiceFallbackMethodEnum = "PATCH"
APIV2010AccountSipSipDomainVoiceFallbackMethodEnumPut APIV2010AccountSipSipDomainVoiceFallbackMethodEnum = "PUT"
APIV2010AccountSipSipDomainVoiceFallbackMethodEnumDelete APIV2010AccountSipSipDomainVoiceFallbackMethodEnum = "DELETE"
)



type APIV2010AccountSipSipDomainVoiceMethodEnum string

const (
    APIV2010AccountSipSipDomainVoiceMethodEnumHead APIV2010AccountSipSipDomainVoiceMethodEnum = "HEAD"
APIV2010AccountSipSipDomainVoiceMethodEnumGet APIV2010AccountSipSipDomainVoiceMethodEnum = "GET"
APIV2010AccountSipSipDomainVoiceMethodEnumPost APIV2010AccountSipSipDomainVoiceMethodEnum = "POST"
APIV2010AccountSipSipDomainVoiceMethodEnumPatch APIV2010AccountSipSipDomainVoiceMethodEnum = "PATCH"
APIV2010AccountSipSipDomainVoiceMethodEnumPut APIV2010AccountSipSipDomainVoiceMethodEnum = "PUT"
APIV2010AccountSipSipDomainVoiceMethodEnumDelete APIV2010AccountSipSipDomainVoiceMethodEnum = "DELETE"
)



type APIV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum string

const (
    APIV2010AccountSipSipDomainVoiceStatusCallbackMethodEnumHead APIV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum = "HEAD"
APIV2010AccountSipSipDomainVoiceStatusCallbackMethodEnumGet APIV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum = "GET"
APIV2010AccountSipSipDomainVoiceStatusCallbackMethodEnumPost APIV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum = "POST"
APIV2010AccountSipSipDomainVoiceStatusCallbackMethodEnumPatch APIV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum = "PATCH"
APIV2010AccountSipSipDomainVoiceStatusCallbackMethodEnumPut APIV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum = "PUT"
APIV2010AccountSipSipDomainVoiceStatusCallbackMethodEnumDelete APIV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum = "DELETE"
)


type APIV2010AccountSipSipDomain struct {
    AccountSid *string `json:"account_sid,omitempty"`
    APIVersion *string `json:"api_version,omitempty"`
    AuthType *string `json:"auth_type,omitempty"`
    ByocTrunkSid *string `json:"byoc_trunk_sid,omitempty"`
    DateCreated *string `json:"date_created,omitempty"`
    DateUpdated *string `json:"date_updated,omitempty"`
    DomainName *string `json:"domain_name,omitempty"`
    EmergencyCallerSid *string `json:"emergency_caller_sid,omitempty"`
    EmergencyCallingEnabled *bool `json:"emergency_calling_enabled,omitempty"`
    FriendlyName *string `json:"friendly_name,omitempty"`
    Secure *bool `json:"secure,omitempty"`
    Sid *string `json:"sid,omitempty"`
    SipRegistration *bool `json:"sip_registration,omitempty"`
    SubresourceUris map[string]interface{} `json:"subresource_uris,omitempty"`
    URI *string `json:"uri,omitempty"`
    VoiceFallbackMethod *APIV2010AccountSipSipDomainVoiceFallbackMethodEnum `json:"voice_fallback_method,omitempty"`
    VoiceFallbackURL *string `json:"voice_fallback_url,omitempty"`
    VoiceMethod *APIV2010AccountSipSipDomainVoiceMethodEnum `json:"voice_method,omitempty"`
    VoiceStatusCallbackMethod *APIV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum `json:"voice_status_callback_method,omitempty"`
    VoiceStatusCallbackURL *string `json:"voice_status_callback_url,omitempty"`
    VoiceURL *string `json:"voice_url,omitempty"`
    
}

