package shared



type InsightsV1AccountSettings struct {
    AccountSid *string `json:"account_sid,omitempty"`
    AdvancedFeatures *bool `json:"advanced_features,omitempty"`
    URL *string `json:"url,omitempty"`
    VoiceTrace *bool `json:"voice_trace,omitempty"`
    
}

