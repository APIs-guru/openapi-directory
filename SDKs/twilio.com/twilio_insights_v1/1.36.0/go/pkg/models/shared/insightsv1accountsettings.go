package shared

type InsightsV1AccountSettings struct {
	AccountSid       *string `json:"account_sid"`
	AdvancedFeatures *bool   `json:"advanced_features"`
	URL              *string `json:"url"`
	VoiceTrace       *bool   `json:"voice_trace"`
}
