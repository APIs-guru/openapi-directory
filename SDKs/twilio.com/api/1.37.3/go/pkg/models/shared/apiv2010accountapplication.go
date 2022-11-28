package shared

type APIV2010AccountApplicationSmsFallbackMethodEnum string

const (
	APIV2010AccountApplicationSmsFallbackMethodEnumHead   APIV2010AccountApplicationSmsFallbackMethodEnum = "HEAD"
	APIV2010AccountApplicationSmsFallbackMethodEnumGet    APIV2010AccountApplicationSmsFallbackMethodEnum = "GET"
	APIV2010AccountApplicationSmsFallbackMethodEnumPost   APIV2010AccountApplicationSmsFallbackMethodEnum = "POST"
	APIV2010AccountApplicationSmsFallbackMethodEnumPatch  APIV2010AccountApplicationSmsFallbackMethodEnum = "PATCH"
	APIV2010AccountApplicationSmsFallbackMethodEnumPut    APIV2010AccountApplicationSmsFallbackMethodEnum = "PUT"
	APIV2010AccountApplicationSmsFallbackMethodEnumDelete APIV2010AccountApplicationSmsFallbackMethodEnum = "DELETE"
)

type APIV2010AccountApplicationSmsMethodEnum string

const (
	APIV2010AccountApplicationSmsMethodEnumHead   APIV2010AccountApplicationSmsMethodEnum = "HEAD"
	APIV2010AccountApplicationSmsMethodEnumGet    APIV2010AccountApplicationSmsMethodEnum = "GET"
	APIV2010AccountApplicationSmsMethodEnumPost   APIV2010AccountApplicationSmsMethodEnum = "POST"
	APIV2010AccountApplicationSmsMethodEnumPatch  APIV2010AccountApplicationSmsMethodEnum = "PATCH"
	APIV2010AccountApplicationSmsMethodEnumPut    APIV2010AccountApplicationSmsMethodEnum = "PUT"
	APIV2010AccountApplicationSmsMethodEnumDelete APIV2010AccountApplicationSmsMethodEnum = "DELETE"
)

type APIV2010AccountApplicationStatusCallbackMethodEnum string

const (
	APIV2010AccountApplicationStatusCallbackMethodEnumHead   APIV2010AccountApplicationStatusCallbackMethodEnum = "HEAD"
	APIV2010AccountApplicationStatusCallbackMethodEnumGet    APIV2010AccountApplicationStatusCallbackMethodEnum = "GET"
	APIV2010AccountApplicationStatusCallbackMethodEnumPost   APIV2010AccountApplicationStatusCallbackMethodEnum = "POST"
	APIV2010AccountApplicationStatusCallbackMethodEnumPatch  APIV2010AccountApplicationStatusCallbackMethodEnum = "PATCH"
	APIV2010AccountApplicationStatusCallbackMethodEnumPut    APIV2010AccountApplicationStatusCallbackMethodEnum = "PUT"
	APIV2010AccountApplicationStatusCallbackMethodEnumDelete APIV2010AccountApplicationStatusCallbackMethodEnum = "DELETE"
)

type APIV2010AccountApplicationVoiceFallbackMethodEnum string

const (
	APIV2010AccountApplicationVoiceFallbackMethodEnumHead   APIV2010AccountApplicationVoiceFallbackMethodEnum = "HEAD"
	APIV2010AccountApplicationVoiceFallbackMethodEnumGet    APIV2010AccountApplicationVoiceFallbackMethodEnum = "GET"
	APIV2010AccountApplicationVoiceFallbackMethodEnumPost   APIV2010AccountApplicationVoiceFallbackMethodEnum = "POST"
	APIV2010AccountApplicationVoiceFallbackMethodEnumPatch  APIV2010AccountApplicationVoiceFallbackMethodEnum = "PATCH"
	APIV2010AccountApplicationVoiceFallbackMethodEnumPut    APIV2010AccountApplicationVoiceFallbackMethodEnum = "PUT"
	APIV2010AccountApplicationVoiceFallbackMethodEnumDelete APIV2010AccountApplicationVoiceFallbackMethodEnum = "DELETE"
)

type APIV2010AccountApplicationVoiceMethodEnum string

const (
	APIV2010AccountApplicationVoiceMethodEnumHead   APIV2010AccountApplicationVoiceMethodEnum = "HEAD"
	APIV2010AccountApplicationVoiceMethodEnumGet    APIV2010AccountApplicationVoiceMethodEnum = "GET"
	APIV2010AccountApplicationVoiceMethodEnumPost   APIV2010AccountApplicationVoiceMethodEnum = "POST"
	APIV2010AccountApplicationVoiceMethodEnumPatch  APIV2010AccountApplicationVoiceMethodEnum = "PATCH"
	APIV2010AccountApplicationVoiceMethodEnumPut    APIV2010AccountApplicationVoiceMethodEnum = "PUT"
	APIV2010AccountApplicationVoiceMethodEnumDelete APIV2010AccountApplicationVoiceMethodEnum = "DELETE"
)

type APIV2010AccountApplication struct {
	AccountSid            *string                                             `json:"account_sid,omitempty"`
	APIVersion            *string                                             `json:"api_version,omitempty"`
	DateCreated           *string                                             `json:"date_created,omitempty"`
	DateUpdated           *string                                             `json:"date_updated,omitempty"`
	FriendlyName          *string                                             `json:"friendly_name,omitempty"`
	MessageStatusCallback *string                                             `json:"message_status_callback,omitempty"`
	Sid                   *string                                             `json:"sid,omitempty"`
	SmsFallbackMethod     *APIV2010AccountApplicationSmsFallbackMethodEnum    `json:"sms_fallback_method,omitempty"`
	SmsFallbackURL        *string                                             `json:"sms_fallback_url,omitempty"`
	SmsMethod             *APIV2010AccountApplicationSmsMethodEnum            `json:"sms_method,omitempty"`
	SmsStatusCallback     *string                                             `json:"sms_status_callback,omitempty"`
	SmsURL                *string                                             `json:"sms_url,omitempty"`
	StatusCallback        *string                                             `json:"status_callback,omitempty"`
	StatusCallbackMethod  *APIV2010AccountApplicationStatusCallbackMethodEnum `json:"status_callback_method,omitempty"`
	URI                   *string                                             `json:"uri,omitempty"`
	VoiceCallerIDLookup   *bool                                               `json:"voice_caller_id_lookup,omitempty"`
	VoiceFallbackMethod   *APIV2010AccountApplicationVoiceFallbackMethodEnum  `json:"voice_fallback_method,omitempty"`
	VoiceFallbackURL      *string                                             `json:"voice_fallback_url,omitempty"`
	VoiceMethod           *APIV2010AccountApplicationVoiceMethodEnum          `json:"voice_method,omitempty"`
	VoiceURL              *string                                             `json:"voice_url,omitempty"`
}
