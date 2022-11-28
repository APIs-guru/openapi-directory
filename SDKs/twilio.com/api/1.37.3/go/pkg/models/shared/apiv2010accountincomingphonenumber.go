package shared

// APIV2010AccountIncomingPhoneNumberCapabilities
// Indicate if a phone can receive calls or messages
type APIV2010AccountIncomingPhoneNumberCapabilities struct {
	Fax   *bool `json:"fax,omitempty"`
	Mms   *bool `json:"mms,omitempty"`
	Sms   *bool `json:"sms,omitempty"`
	Voice *bool `json:"voice,omitempty"`
}

type APIV2010AccountIncomingPhoneNumberSmsFallbackMethodEnum string

const (
	APIV2010AccountIncomingPhoneNumberSmsFallbackMethodEnumHead   APIV2010AccountIncomingPhoneNumberSmsFallbackMethodEnum = "HEAD"
	APIV2010AccountIncomingPhoneNumberSmsFallbackMethodEnumGet    APIV2010AccountIncomingPhoneNumberSmsFallbackMethodEnum = "GET"
	APIV2010AccountIncomingPhoneNumberSmsFallbackMethodEnumPost   APIV2010AccountIncomingPhoneNumberSmsFallbackMethodEnum = "POST"
	APIV2010AccountIncomingPhoneNumberSmsFallbackMethodEnumPatch  APIV2010AccountIncomingPhoneNumberSmsFallbackMethodEnum = "PATCH"
	APIV2010AccountIncomingPhoneNumberSmsFallbackMethodEnumPut    APIV2010AccountIncomingPhoneNumberSmsFallbackMethodEnum = "PUT"
	APIV2010AccountIncomingPhoneNumberSmsFallbackMethodEnumDelete APIV2010AccountIncomingPhoneNumberSmsFallbackMethodEnum = "DELETE"
)

type APIV2010AccountIncomingPhoneNumberSmsMethodEnum string

const (
	APIV2010AccountIncomingPhoneNumberSmsMethodEnumHead   APIV2010AccountIncomingPhoneNumberSmsMethodEnum = "HEAD"
	APIV2010AccountIncomingPhoneNumberSmsMethodEnumGet    APIV2010AccountIncomingPhoneNumberSmsMethodEnum = "GET"
	APIV2010AccountIncomingPhoneNumberSmsMethodEnumPost   APIV2010AccountIncomingPhoneNumberSmsMethodEnum = "POST"
	APIV2010AccountIncomingPhoneNumberSmsMethodEnumPatch  APIV2010AccountIncomingPhoneNumberSmsMethodEnum = "PATCH"
	APIV2010AccountIncomingPhoneNumberSmsMethodEnumPut    APIV2010AccountIncomingPhoneNumberSmsMethodEnum = "PUT"
	APIV2010AccountIncomingPhoneNumberSmsMethodEnumDelete APIV2010AccountIncomingPhoneNumberSmsMethodEnum = "DELETE"
)

type APIV2010AccountIncomingPhoneNumberStatusCallbackMethodEnum string

const (
	APIV2010AccountIncomingPhoneNumberStatusCallbackMethodEnumHead   APIV2010AccountIncomingPhoneNumberStatusCallbackMethodEnum = "HEAD"
	APIV2010AccountIncomingPhoneNumberStatusCallbackMethodEnumGet    APIV2010AccountIncomingPhoneNumberStatusCallbackMethodEnum = "GET"
	APIV2010AccountIncomingPhoneNumberStatusCallbackMethodEnumPost   APIV2010AccountIncomingPhoneNumberStatusCallbackMethodEnum = "POST"
	APIV2010AccountIncomingPhoneNumberStatusCallbackMethodEnumPatch  APIV2010AccountIncomingPhoneNumberStatusCallbackMethodEnum = "PATCH"
	APIV2010AccountIncomingPhoneNumberStatusCallbackMethodEnumPut    APIV2010AccountIncomingPhoneNumberStatusCallbackMethodEnum = "PUT"
	APIV2010AccountIncomingPhoneNumberStatusCallbackMethodEnumDelete APIV2010AccountIncomingPhoneNumberStatusCallbackMethodEnum = "DELETE"
)

type APIV2010AccountIncomingPhoneNumberVoiceFallbackMethodEnum string

const (
	APIV2010AccountIncomingPhoneNumberVoiceFallbackMethodEnumHead   APIV2010AccountIncomingPhoneNumberVoiceFallbackMethodEnum = "HEAD"
	APIV2010AccountIncomingPhoneNumberVoiceFallbackMethodEnumGet    APIV2010AccountIncomingPhoneNumberVoiceFallbackMethodEnum = "GET"
	APIV2010AccountIncomingPhoneNumberVoiceFallbackMethodEnumPost   APIV2010AccountIncomingPhoneNumberVoiceFallbackMethodEnum = "POST"
	APIV2010AccountIncomingPhoneNumberVoiceFallbackMethodEnumPatch  APIV2010AccountIncomingPhoneNumberVoiceFallbackMethodEnum = "PATCH"
	APIV2010AccountIncomingPhoneNumberVoiceFallbackMethodEnumPut    APIV2010AccountIncomingPhoneNumberVoiceFallbackMethodEnum = "PUT"
	APIV2010AccountIncomingPhoneNumberVoiceFallbackMethodEnumDelete APIV2010AccountIncomingPhoneNumberVoiceFallbackMethodEnum = "DELETE"
)

type APIV2010AccountIncomingPhoneNumberVoiceMethodEnum string

const (
	APIV2010AccountIncomingPhoneNumberVoiceMethodEnumHead   APIV2010AccountIncomingPhoneNumberVoiceMethodEnum = "HEAD"
	APIV2010AccountIncomingPhoneNumberVoiceMethodEnumGet    APIV2010AccountIncomingPhoneNumberVoiceMethodEnum = "GET"
	APIV2010AccountIncomingPhoneNumberVoiceMethodEnumPost   APIV2010AccountIncomingPhoneNumberVoiceMethodEnum = "POST"
	APIV2010AccountIncomingPhoneNumberVoiceMethodEnumPatch  APIV2010AccountIncomingPhoneNumberVoiceMethodEnum = "PATCH"
	APIV2010AccountIncomingPhoneNumberVoiceMethodEnumPut    APIV2010AccountIncomingPhoneNumberVoiceMethodEnum = "PUT"
	APIV2010AccountIncomingPhoneNumberVoiceMethodEnumDelete APIV2010AccountIncomingPhoneNumberVoiceMethodEnum = "DELETE"
)

type APIV2010AccountIncomingPhoneNumber struct {
	AccountSid             *string                                                     `json:"account_sid,omitempty"`
	AddressRequirements    *IncomingPhoneNumberEnumAddressRequirementEnum              `json:"address_requirements,omitempty"`
	AddressSid             *string                                                     `json:"address_sid,omitempty"`
	APIVersion             *string                                                     `json:"api_version,omitempty"`
	Beta                   *bool                                                       `json:"beta,omitempty"`
	BundleSid              *string                                                     `json:"bundle_sid,omitempty"`
	Capabilities           *APIV2010AccountIncomingPhoneNumberCapabilities             `json:"capabilities,omitempty"`
	DateCreated            *string                                                     `json:"date_created,omitempty"`
	DateUpdated            *string                                                     `json:"date_updated,omitempty"`
	EmergencyAddressSid    *string                                                     `json:"emergency_address_sid,omitempty"`
	EmergencyAddressStatus *IncomingPhoneNumberEnumEmergencyAddressStatusEnum          `json:"emergency_address_status,omitempty"`
	EmergencyStatus        *IncomingPhoneNumberEnumEmergencyStatusEnum                 `json:"emergency_status,omitempty"`
	FriendlyName           *string                                                     `json:"friendly_name,omitempty"`
	IdentitySid            *string                                                     `json:"identity_sid,omitempty"`
	Origin                 *string                                                     `json:"origin,omitempty"`
	PhoneNumber            *string                                                     `json:"phone_number,omitempty"`
	Sid                    *string                                                     `json:"sid,omitempty"`
	SmsApplicationSid      *string                                                     `json:"sms_application_sid,omitempty"`
	SmsFallbackMethod      *APIV2010AccountIncomingPhoneNumberSmsFallbackMethodEnum    `json:"sms_fallback_method,omitempty"`
	SmsFallbackURL         *string                                                     `json:"sms_fallback_url,omitempty"`
	SmsMethod              *APIV2010AccountIncomingPhoneNumberSmsMethodEnum            `json:"sms_method,omitempty"`
	SmsURL                 *string                                                     `json:"sms_url,omitempty"`
	Status                 *string                                                     `json:"status,omitempty"`
	StatusCallback         *string                                                     `json:"status_callback,omitempty"`
	StatusCallbackMethod   *APIV2010AccountIncomingPhoneNumberStatusCallbackMethodEnum `json:"status_callback_method,omitempty"`
	TrunkSid               *string                                                     `json:"trunk_sid,omitempty"`
	URI                    *string                                                     `json:"uri,omitempty"`
	VoiceApplicationSid    *string                                                     `json:"voice_application_sid,omitempty"`
	VoiceCallerIDLookup    *bool                                                       `json:"voice_caller_id_lookup,omitempty"`
	VoiceFallbackMethod    *APIV2010AccountIncomingPhoneNumberVoiceFallbackMethodEnum  `json:"voice_fallback_method,omitempty"`
	VoiceFallbackURL       *string                                                     `json:"voice_fallback_url,omitempty"`
	VoiceMethod            *APIV2010AccountIncomingPhoneNumberVoiceMethodEnum          `json:"voice_method,omitempty"`
	VoiceReceiveMode       *IncomingPhoneNumberEnumVoiceReceiveModeEnum                `json:"voice_receive_mode,omitempty"`
	VoiceURL               *string                                                     `json:"voice_url,omitempty"`
}
