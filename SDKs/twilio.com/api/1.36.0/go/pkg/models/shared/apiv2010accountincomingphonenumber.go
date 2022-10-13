package shared

type APIV2010AccountIncomingPhoneNumberCapabilities struct {
	Fax   *bool `json:"fax"`
	Mms   *bool `json:"mms"`
	Sms   *bool `json:"sms"`
	Voice *bool `json:"voice"`
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
	AccountSid             *string                                                     `json:"account_sid"`
	AddressRequirements    *IncomingPhoneNumberEnumAddressRequirementEnum              `json:"address_requirements"`
	AddressSid             *string                                                     `json:"address_sid"`
	APIVersion             *string                                                     `json:"api_version"`
	Beta                   *bool                                                       `json:"beta"`
	BundleSid              *string                                                     `json:"bundle_sid"`
	Capabilities           *APIV2010AccountIncomingPhoneNumberCapabilities             `json:"capabilities"`
	DateCreated            *string                                                     `json:"date_created"`
	DateUpdated            *string                                                     `json:"date_updated"`
	EmergencyAddressSid    *string                                                     `json:"emergency_address_sid"`
	EmergencyAddressStatus *IncomingPhoneNumberEnumEmergencyAddressStatusEnum          `json:"emergency_address_status"`
	EmergencyStatus        *IncomingPhoneNumberEnumEmergencyStatusEnum                 `json:"emergency_status"`
	FriendlyName           *string                                                     `json:"friendly_name"`
	IdentitySid            *string                                                     `json:"identity_sid"`
	Origin                 *string                                                     `json:"origin"`
	PhoneNumber            *string                                                     `json:"phone_number"`
	Sid                    *string                                                     `json:"sid"`
	SmsApplicationSid      *string                                                     `json:"sms_application_sid"`
	SmsFallbackMethod      *APIV2010AccountIncomingPhoneNumberSmsFallbackMethodEnum    `json:"sms_fallback_method"`
	SmsFallbackURL         *string                                                     `json:"sms_fallback_url"`
	SmsMethod              *APIV2010AccountIncomingPhoneNumberSmsMethodEnum            `json:"sms_method"`
	SmsURL                 *string                                                     `json:"sms_url"`
	Status                 *string                                                     `json:"status"`
	StatusCallback         *string                                                     `json:"status_callback"`
	StatusCallbackMethod   *APIV2010AccountIncomingPhoneNumberStatusCallbackMethodEnum `json:"status_callback_method"`
	TrunkSid               *string                                                     `json:"trunk_sid"`
	URI                    *string                                                     `json:"uri"`
	VoiceApplicationSid    *string                                                     `json:"voice_application_sid"`
	VoiceCallerIDLookup    *bool                                                       `json:"voice_caller_id_lookup"`
	VoiceFallbackMethod    *APIV2010AccountIncomingPhoneNumberVoiceFallbackMethodEnum  `json:"voice_fallback_method"`
	VoiceFallbackURL       *string                                                     `json:"voice_fallback_url"`
	VoiceMethod            *APIV2010AccountIncomingPhoneNumberVoiceMethodEnum          `json:"voice_method"`
	VoiceReceiveMode       *IncomingPhoneNumberEnumVoiceReceiveModeEnum                `json:"voice_receive_mode"`
	VoiceURL               *string                                                     `json:"voice_url"`
}
