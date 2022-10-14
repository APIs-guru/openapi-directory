package shared

type NetworkFollowEmbedded struct {
	Network map[string]interface{} `json:"network,omitempty"`
}

type NetworkFollow struct {
	Embedded  *NetworkFollowEmbedded `json:"_embedded,omitempty"`
	NetworkID *int64                 `json:"network_id,omitempty"`
}
