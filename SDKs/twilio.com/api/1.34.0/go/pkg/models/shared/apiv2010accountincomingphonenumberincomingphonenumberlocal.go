package shared

type APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalCapabilities struct {
	Fax   *bool `json:"fax"`
	Mms   *bool `json:"mms"`
	Sms   *bool `json:"sms"`
	Voice *bool `json:"voice"`
}

type APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsFallbackMethodEnum string

const (
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsFallbackMethodEnumHead   APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsFallbackMethodEnum = "HEAD"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsFallbackMethodEnumGet    APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsFallbackMethodEnum = "GET"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsFallbackMethodEnumPost   APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsFallbackMethodEnum = "POST"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsFallbackMethodEnumPatch  APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsFallbackMethodEnum = "PATCH"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsFallbackMethodEnumPut    APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsFallbackMethodEnum = "PUT"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsFallbackMethodEnumDelete APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsFallbackMethodEnum = "DELETE"
)

type APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsMethodEnum string

const (
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsMethodEnumHead   APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsMethodEnum = "HEAD"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsMethodEnumGet    APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsMethodEnum = "GET"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsMethodEnumPost   APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsMethodEnum = "POST"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsMethodEnumPatch  APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsMethodEnum = "PATCH"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsMethodEnumPut    APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsMethodEnum = "PUT"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsMethodEnumDelete APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsMethodEnum = "DELETE"
)

type APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalStatusCallbackMethodEnum string

const (
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalStatusCallbackMethodEnumHead   APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalStatusCallbackMethodEnum = "HEAD"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalStatusCallbackMethodEnumGet    APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalStatusCallbackMethodEnum = "GET"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalStatusCallbackMethodEnumPost   APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalStatusCallbackMethodEnum = "POST"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalStatusCallbackMethodEnumPatch  APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalStatusCallbackMethodEnum = "PATCH"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalStatusCallbackMethodEnumPut    APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalStatusCallbackMethodEnum = "PUT"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalStatusCallbackMethodEnumDelete APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalStatusCallbackMethodEnum = "DELETE"
)

type APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceFallbackMethodEnum string

const (
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceFallbackMethodEnumHead   APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceFallbackMethodEnum = "HEAD"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceFallbackMethodEnumGet    APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceFallbackMethodEnum = "GET"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceFallbackMethodEnumPost   APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceFallbackMethodEnum = "POST"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceFallbackMethodEnumPatch  APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceFallbackMethodEnum = "PATCH"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceFallbackMethodEnumPut    APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceFallbackMethodEnum = "PUT"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceFallbackMethodEnumDelete APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceFallbackMethodEnum = "DELETE"
)

type APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceMethodEnum string

const (
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceMethodEnumHead   APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceMethodEnum = "HEAD"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceMethodEnumGet    APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceMethodEnum = "GET"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceMethodEnumPost   APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceMethodEnum = "POST"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceMethodEnumPatch  APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceMethodEnum = "PATCH"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceMethodEnumPut    APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceMethodEnum = "PUT"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceMethodEnumDelete APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceMethodEnum = "DELETE"
)

type APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal struct {
	AccountSid             *string                                                                             `json:"account_sid"`
	AddressRequirements    *IncomingPhoneNumberLocalEnumAddressRequirementEnum                                 `json:"address_requirements"`
	AddressSid             *string                                                                             `json:"address_sid"`
	APIVersion             *string                                                                             `json:"api_version"`
	Beta                   *bool                                                                               `json:"beta"`
	BundleSid              *string                                                                             `json:"bundle_sid"`
	Capabilities           *APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalCapabilities             `json:"capabilities"`
	DateCreated            *string                                                                             `json:"date_created"`
	DateUpdated            *string                                                                             `json:"date_updated"`
	EmergencyAddressSid    *string                                                                             `json:"emergency_address_sid"`
	EmergencyAddressStatus *IncomingPhoneNumberLocalEnumEmergencyAddressStatusEnum                             `json:"emergency_address_status"`
	EmergencyStatus        *IncomingPhoneNumberLocalEnumEmergencyStatusEnum                                    `json:"emergency_status"`
	FriendlyName           *string                                                                             `json:"friendly_name"`
	IdentitySid            *string                                                                             `json:"identity_sid"`
	Origin                 *string                                                                             `json:"origin"`
	PhoneNumber            *string                                                                             `json:"phone_number"`
	Sid                    *string                                                                             `json:"sid"`
	SmsApplicationSid      *string                                                                             `json:"sms_application_sid"`
	SmsFallbackMethod      *APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsFallbackMethodEnum    `json:"sms_fallback_method"`
	SmsFallbackURL         *string                                                                             `json:"sms_fallback_url"`
	SmsMethod              *APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsMethodEnum            `json:"sms_method"`
	SmsURL                 *string                                                                             `json:"sms_url"`
	Status                 *string                                                                             `json:"status"`
	StatusCallback         *string                                                                             `json:"status_callback"`
	StatusCallbackMethod   *APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalStatusCallbackMethodEnum `json:"status_callback_method"`
	TrunkSid               *string                                                                             `json:"trunk_sid"`
	URI                    *string                                                                             `json:"uri"`
	VoiceApplicationSid    *string                                                                             `json:"voice_application_sid"`
	VoiceCallerIDLookup    *bool                                                                               `json:"voice_caller_id_lookup"`
	VoiceFallbackMethod    *APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceFallbackMethodEnum  `json:"voice_fallback_method"`
	VoiceFallbackURL       *string                                                                             `json:"voice_fallback_url"`
	VoiceMethod            *APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceMethodEnum          `json:"voice_method"`
	VoiceReceiveMode       *IncomingPhoneNumberLocalEnumVoiceReceiveModeEnum                                   `json:"voice_receive_mode"`
	VoiceURL               *string                                                                             `json:"voice_url"`
}
