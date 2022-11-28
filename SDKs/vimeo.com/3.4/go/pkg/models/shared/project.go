package shared

// ProjectMetadataConnectionsVideos
// A standard connection object indicating how to get all the videos in this project.
type ProjectMetadataConnectionsVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// ProjectMetadataConnections
// A list of resource URIs related to the project.
type ProjectMetadataConnections struct {
	Videos ProjectMetadataConnectionsVideos `json:"videos"`
}

// ProjectMetadata
// The project's metadata.
type ProjectMetadata struct {
	Connections ProjectMetadataConnections `json:"connections"`
}

type Project struct {
	CreatedTime  string          `json:"created_time"`
	Metadata     ProjectMetadata `json:"metadata"`
	ModifiedTime string          `json:"modified_time"`
	Name         string          `json:"name"`
	ResourceKey  string          `json:"resource_key"`
	URI          string          `json:"uri"`
	User         User            `json:"user"`
}
