package shared




type APIV2010AccountAddressDependentPhoneNumberSmsFallbackMethodEnum string

const (
    APIV2010AccountAddressDependentPhoneNumberSmsFallbackMethodEnumHead APIV2010AccountAddressDependentPhoneNumberSmsFallbackMethodEnum = "HEAD"
APIV2010AccountAddressDependentPhoneNumberSmsFallbackMethodEnumGet APIV2010AccountAddressDependentPhoneNumberSmsFallbackMethodEnum = "GET"
APIV2010AccountAddressDependentPhoneNumberSmsFallbackMethodEnumPost APIV2010AccountAddressDependentPhoneNumberSmsFallbackMethodEnum = "POST"
APIV2010AccountAddressDependentPhoneNumberSmsFallbackMethodEnumPatch APIV2010AccountAddressDependentPhoneNumberSmsFallbackMethodEnum = "PATCH"
APIV2010AccountAddressDependentPhoneNumberSmsFallbackMethodEnumPut APIV2010AccountAddressDependentPhoneNumberSmsFallbackMethodEnum = "PUT"
APIV2010AccountAddressDependentPhoneNumberSmsFallbackMethodEnumDelete APIV2010AccountAddressDependentPhoneNumberSmsFallbackMethodEnum = "DELETE"
)



type APIV2010AccountAddressDependentPhoneNumberSmsMethodEnum string

const (
    APIV2010AccountAddressDependentPhoneNumberSmsMethodEnumHead APIV2010AccountAddressDependentPhoneNumberSmsMethodEnum = "HEAD"
APIV2010AccountAddressDependentPhoneNumberSmsMethodEnumGet APIV2010AccountAddressDependentPhoneNumberSmsMethodEnum = "GET"
APIV2010AccountAddressDependentPhoneNumberSmsMethodEnumPost APIV2010AccountAddressDependentPhoneNumberSmsMethodEnum = "POST"
APIV2010AccountAddressDependentPhoneNumberSmsMethodEnumPatch APIV2010AccountAddressDependentPhoneNumberSmsMethodEnum = "PATCH"
APIV2010AccountAddressDependentPhoneNumberSmsMethodEnumPut APIV2010AccountAddressDependentPhoneNumberSmsMethodEnum = "PUT"
APIV2010AccountAddressDependentPhoneNumberSmsMethodEnumDelete APIV2010AccountAddressDependentPhoneNumberSmsMethodEnum = "DELETE"
)



type APIV2010AccountAddressDependentPhoneNumberStatusCallbackMethodEnum string

const (
    APIV2010AccountAddressDependentPhoneNumberStatusCallbackMethodEnumHead APIV2010AccountAddressDependentPhoneNumberStatusCallbackMethodEnum = "HEAD"
APIV2010AccountAddressDependentPhoneNumberStatusCallbackMethodEnumGet APIV2010AccountAddressDependentPhoneNumberStatusCallbackMethodEnum = "GET"
APIV2010AccountAddressDependentPhoneNumberStatusCallbackMethodEnumPost APIV2010AccountAddressDependentPhoneNumberStatusCallbackMethodEnum = "POST"
APIV2010AccountAddressDependentPhoneNumberStatusCallbackMethodEnumPatch APIV2010AccountAddressDependentPhoneNumberStatusCallbackMethodEnum = "PATCH"
APIV2010AccountAddressDependentPhoneNumberStatusCallbackMethodEnumPut APIV2010AccountAddressDependentPhoneNumberStatusCallbackMethodEnum = "PUT"
APIV2010AccountAddressDependentPhoneNumberStatusCallbackMethodEnumDelete APIV2010AccountAddressDependentPhoneNumberStatusCallbackMethodEnum = "DELETE"
)



type APIV2010AccountAddressDependentPhoneNumberVoiceFallbackMethodEnum string

const (
    APIV2010AccountAddressDependentPhoneNumberVoiceFallbackMethodEnumHead APIV2010AccountAddressDependentPhoneNumberVoiceFallbackMethodEnum = "HEAD"
APIV2010AccountAddressDependentPhoneNumberVoiceFallbackMethodEnumGet APIV2010AccountAddressDependentPhoneNumberVoiceFallbackMethodEnum = "GET"
APIV2010AccountAddressDependentPhoneNumberVoiceFallbackMethodEnumPost APIV2010AccountAddressDependentPhoneNumberVoiceFallbackMethodEnum = "POST"
APIV2010AccountAddressDependentPhoneNumberVoiceFallbackMethodEnumPatch APIV2010AccountAddressDependentPhoneNumberVoiceFallbackMethodEnum = "PATCH"
APIV2010AccountAddressDependentPhoneNumberVoiceFallbackMethodEnumPut APIV2010AccountAddressDependentPhoneNumberVoiceFallbackMethodEnum = "PUT"
APIV2010AccountAddressDependentPhoneNumberVoiceFallbackMethodEnumDelete APIV2010AccountAddressDependentPhoneNumberVoiceFallbackMethodEnum = "DELETE"
)



type APIV2010AccountAddressDependentPhoneNumberVoiceMethodEnum string

const (
    APIV2010AccountAddressDependentPhoneNumberVoiceMethodEnumHead APIV2010AccountAddressDependentPhoneNumberVoiceMethodEnum = "HEAD"
APIV2010AccountAddressDependentPhoneNumberVoiceMethodEnumGet APIV2010AccountAddressDependentPhoneNumberVoiceMethodEnum = "GET"
APIV2010AccountAddressDependentPhoneNumberVoiceMethodEnumPost APIV2010AccountAddressDependentPhoneNumberVoiceMethodEnum = "POST"
APIV2010AccountAddressDependentPhoneNumberVoiceMethodEnumPatch APIV2010AccountAddressDependentPhoneNumberVoiceMethodEnum = "PATCH"
APIV2010AccountAddressDependentPhoneNumberVoiceMethodEnumPut APIV2010AccountAddressDependentPhoneNumberVoiceMethodEnum = "PUT"
APIV2010AccountAddressDependentPhoneNumberVoiceMethodEnumDelete APIV2010AccountAddressDependentPhoneNumberVoiceMethodEnum = "DELETE"
)


type APIV2010AccountAddressDependentPhoneNumber struct {
    AccountSid *string `json:"account_sid,omitempty"`
    AddressRequirements *DependentPhoneNumberEnumAddressRequirementEnum `json:"address_requirements,omitempty"`
    APIVersion *string `json:"api_version,omitempty"`
    Capabilities *interface{} `json:"capabilities,omitempty"`
    DateCreated *string `json:"date_created,omitempty"`
    DateUpdated *string `json:"date_updated,omitempty"`
    EmergencyAddressSid *string `json:"emergency_address_sid,omitempty"`
    EmergencyStatus *DependentPhoneNumberEnumEmergencyStatusEnum `json:"emergency_status,omitempty"`
    FriendlyName *string `json:"friendly_name,omitempty"`
    PhoneNumber *string `json:"phone_number,omitempty"`
    Sid *string `json:"sid,omitempty"`
    SmsApplicationSid *string `json:"sms_application_sid,omitempty"`
    SmsFallbackMethod *APIV2010AccountAddressDependentPhoneNumberSmsFallbackMethodEnum `json:"sms_fallback_method,omitempty"`
    SmsFallbackURL *string `json:"sms_fallback_url,omitempty"`
    SmsMethod *APIV2010AccountAddressDependentPhoneNumberSmsMethodEnum `json:"sms_method,omitempty"`
    SmsURL *string `json:"sms_url,omitempty"`
    StatusCallback *string `json:"status_callback,omitempty"`
    StatusCallbackMethod *APIV2010AccountAddressDependentPhoneNumberStatusCallbackMethodEnum `json:"status_callback_method,omitempty"`
    TrunkSid *string `json:"trunk_sid,omitempty"`
    URI *string `json:"uri,omitempty"`
    VoiceApplicationSid *string `json:"voice_application_sid,omitempty"`
    VoiceCallerIDLookup *bool `json:"voice_caller_id_lookup,omitempty"`
    VoiceFallbackMethod *APIV2010AccountAddressDependentPhoneNumberVoiceFallbackMethodEnum `json:"voice_fallback_method,omitempty"`
    VoiceFallbackURL *string `json:"voice_fallback_url,omitempty"`
    VoiceMethod *APIV2010AccountAddressDependentPhoneNumberVoiceMethodEnum `json:"voice_method,omitempty"`
    VoiceURL *string `json:"voice_url,omitempty"`
    
}

