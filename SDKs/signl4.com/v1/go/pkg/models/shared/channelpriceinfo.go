package shared

type ChannelPriceInfo struct {
	SmsPerMessage  *int32 `json:"smsPerMessage"`
	VoicePerMinute *int32 `json:"voicePerMinute"`
}
