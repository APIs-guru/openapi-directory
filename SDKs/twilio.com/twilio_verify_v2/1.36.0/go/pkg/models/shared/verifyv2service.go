package shared

import (
"time")

type VerifyV2Service struct {
    AccountSid *string `json:"account_sid,omitempty"`
    CodeLength *int64 `json:"code_length,omitempty"`
    CustomCodeEnabled *bool `json:"custom_code_enabled,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    DefaultTemplateSid *string `json:"default_template_sid,omitempty"`
    DoNotShareWarningEnabled *bool `json:"do_not_share_warning_enabled,omitempty"`
    DtmfInputRequired *bool `json:"dtmf_input_required,omitempty"`
    FriendlyName *string `json:"friendly_name,omitempty"`
    Links map[string]interface{} `json:"links,omitempty"`
    LookupEnabled *bool `json:"lookup_enabled,omitempty"`
    Psd2Enabled *bool `json:"psd2_enabled,omitempty"`
    Push *interface{} `json:"push,omitempty"`
    Sid *string `json:"sid,omitempty"`
    SkipSmsToLandlines *bool `json:"skip_sms_to_landlines,omitempty"`
    Totp *interface{} `json:"totp,omitempty"`
    TtsName *string `json:"tts_name,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

