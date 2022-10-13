package shared

type NetworkFollowEmbedded struct {
	Network map[string]interface{} `json:"network"`
}

type NetworkFollow struct {
	Embedded  *NetworkFollowEmbedded `json:"_embedded"`
	NetworkID *int64                 `json:"network_id"`
}
