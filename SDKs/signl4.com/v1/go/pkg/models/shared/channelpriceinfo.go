package shared



type ChannelPriceInfo struct {
    SmsPerMessage *int32 `json:"smsPerMessage,omitempty"`
    VoicePerMinute *int32 `json:"voicePerMinute,omitempty"`
    
}

