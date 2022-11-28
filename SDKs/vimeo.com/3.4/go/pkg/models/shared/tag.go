package shared

// TagMetadataConnectionsVideos
// Information about the videos related to this tag.
type TagMetadataConnectionsVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// TagMetadataConnections
// A collection of information that is connected to this resource.
type TagMetadataConnections struct {
	Videos TagMetadataConnectionsVideos `json:"videos"`
}

// TagMetadata
// Metadata about the group.
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
