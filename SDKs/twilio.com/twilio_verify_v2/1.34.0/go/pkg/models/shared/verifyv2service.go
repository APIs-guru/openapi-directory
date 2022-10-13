package shared

import (
	"time"
)

type VerifyV2Service struct {
	AccountSid               *string                `json:"account_sid"`
	CodeLength               *int64                 `json:"code_length"`
	CustomCodeEnabled        *bool                  `json:"custom_code_enabled"`
	DateCreated              *time.Time             `json:"date_created"`
	DateUpdated              *time.Time             `json:"date_updated"`
	DefaultTemplateSid       *string                `json:"default_template_sid"`
	DoNotShareWarningEnabled *bool                  `json:"do_not_share_warning_enabled"`
	DtmfInputRequired        *bool                  `json:"dtmf_input_required"`
	FriendlyName             *string                `json:"friendly_name"`
	Links                    map[string]interface{} `json:"links"`
	LookupEnabled            *bool                  `json:"lookup_enabled"`
	Psd2Enabled              *bool                  `json:"psd2_enabled"`
	Push                     *interface{}           `json:"push"`
	Sid                      *string                `json:"sid"`
	SkipSmsToLandlines       *bool                  `json:"skip_sms_to_landlines"`
	Totp                     *interface{}           `json:"totp"`
	TtsName                  *string                `json:"tts_name"`
	URL                      *string                `json:"url"`
}
