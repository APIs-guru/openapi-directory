package shared

// APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalCapabilities
// Indicate if a phone can receive calls or messages
type APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalCapabilities struct {
	Fax   *bool `json:"fax,omitempty"`
	Mms   *bool `json:"mms,omitempty"`
	Sms   *bool `json:"sms,omitempty"`
	Voice *bool `json:"voice,omitempty"`
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
	AccountSid             *string                                                                             `json:"account_sid,omitempty"`
	AddressRequirements    *IncomingPhoneNumberLocalEnumAddressRequirementEnum                                 `json:"address_requirements,omitempty"`
	AddressSid             *string                                                                             `json:"address_sid,omitempty"`
	APIVersion             *string                                                                             `json:"api_version,omitempty"`
	Beta                   *bool                                                                               `json:"beta,omitempty"`
	BundleSid              *string                                                                             `json:"bundle_sid,omitempty"`
	Capabilities           *APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalCapabilities             `json:"capabilities,omitempty"`
	DateCreated            *string                                                                             `json:"date_created,omitempty"`
	DateUpdated            *string                                                                             `json:"date_updated,omitempty"`
	EmergencyAddressSid    *string                                                                             `json:"emergency_address_sid,omitempty"`
	EmergencyAddressStatus *IncomingPhoneNumberLocalEnumEmergencyAddressStatusEnum                             `json:"emergency_address_status,omitempty"`
	EmergencyStatus        *IncomingPhoneNumberLocalEnumEmergencyStatusEnum                                    `json:"emergency_status,omitempty"`
	FriendlyName           *string                                                                             `json:"friendly_name,omitempty"`
	IdentitySid            *string                                                                             `json:"identity_sid,omitempty"`
	Origin                 *string                                                                             `json:"origin,omitempty"`
	PhoneNumber            *string                                                                             `json:"phone_number,omitempty"`
	Sid                    *string                                                                             `json:"sid,omitempty"`
	SmsApplicationSid      *string                                                                             `json:"sms_application_sid,omitempty"`
	SmsFallbackMethod      *APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsFallbackMethodEnum    `json:"sms_fallback_method,omitempty"`
	SmsFallbackURL         *string                                                                             `json:"sms_fallback_url,omitempty"`
	SmsMethod              *APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsMethodEnum            `json:"sms_method,omitempty"`
	SmsURL                 *string                                                                             `json:"sms_url,omitempty"`
	Status                 *string                                                                             `json:"status,omitempty"`
	StatusCallback         *string                                                                             `json:"status_callback,omitempty"`
	StatusCallbackMethod   *APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalStatusCallbackMethodEnum `json:"status_callback_method,omitempty"`
	TrunkSid               *string                                                                             `json:"trunk_sid,omitempty"`
	URI                    *string                                                                             `json:"uri,omitempty"`
	VoiceApplicationSid    *string                                                                             `json:"voice_application_sid,omitempty"`
	VoiceCallerIDLookup    *bool                                                                               `json:"voice_caller_id_lookup,omitempty"`
	VoiceFallbackMethod    *APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceFallbackMethodEnum  `json:"voice_fallback_method,omitempty"`
	VoiceFallbackURL       *string                                                                             `json:"voice_fallback_url,omitempty"`
	VoiceMethod            *APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceMethodEnum          `json:"voice_method,omitempty"`
	VoiceReceiveMode       *IncomingPhoneNumberLocalEnumVoiceReceiveModeEnum                                   `json:"voice_receive_mode,omitempty"`
	VoiceURL               *string                                                                             `json:"voice_url,omitempty"`
}
