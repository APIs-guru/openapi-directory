package shared

type WebchannelFollowEmbedded struct {
	Webchannel map[string]interface{} `json:"webchannel,omitempty"`
}

type WebchannelFollow struct {
	Embedded     *WebchannelFollowEmbedded `json:"_embedded,omitempty"`
	WebchannelID *int64                    `json:"webchannel_id,omitempty"`
}
