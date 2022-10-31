package shared



type ProjectMetadataConnectionsVideos struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type ProjectMetadataConnections struct {
    Videos ProjectMetadataConnectionsVideos `json:"videos"`
    
}

type ProjectMetadata struct {
    Connections ProjectMetadataConnections `json:"connections"`
    
}

type Project struct {
    CreatedTime string `json:"created_time"`
    Metadata ProjectMetadata `json:"metadata"`
    ModifiedTime string `json:"modified_time"`
    Name string `json:"name"`
    ResourceKey string `json:"resource_key"`
    URI string `json:"uri"`
    User User `json:"user"`
    
}

