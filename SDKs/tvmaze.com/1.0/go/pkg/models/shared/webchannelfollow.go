package shared

type WebchannelFollowEmbedded struct {
	Webchannel map[string]interface{} `json:"webchannel"`
}

type WebchannelFollow struct {
	Embedded     *WebchannelFollowEmbedded `json:"_embedded"`
	WebchannelID *int64                    `json:"webchannel_id"`
}
