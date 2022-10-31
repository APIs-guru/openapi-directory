package shared

type TagMetadataConnectionsVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type TagMetadataConnections struct {
	Videos TagMetadataConnectionsVideos `json:"videos"`
}

type TagMetadata struct {
	Connections TagMetadataConnections `json:"connections"`
}

type Tag struct {
	Canonical   string      `json:"canonical"`
	Metadata    TagMetadata `json:"metadata"`
	Name        string      `json:"name"`
	ResourceKey string      `json:"resource_key"`
	URI         string      `json:"uri"`
}
