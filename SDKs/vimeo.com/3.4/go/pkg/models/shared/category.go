package shared



type CategoryMetadataConnectionsChannels struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type CategoryMetadataConnectionsGroups struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type CategoryMetadataConnectionsUsers struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type CategoryMetadataConnectionsVideos struct {
    Options []string `json:"options"`
    Total float64 `json:"total"`
    URI string `json:"uri"`
    
}

type CategoryMetadataConnections struct {
    Channels CategoryMetadataConnectionsChannels `json:"channels"`
    Groups CategoryMetadataConnectionsGroups `json:"groups"`
    Users CategoryMetadataConnectionsUsers `json:"users"`
    Videos CategoryMetadataConnectionsVideos `json:"videos"`
    
}

type CategoryMetadataInteractionsFollow struct {
    Added bool `json:"added"`
    AddedTime string `json:"added_time"`
    URI string `json:"uri"`
    
}

type CategoryMetadataInteractions struct {
    Follow CategoryMetadataInteractionsFollow `json:"follow"`
    
}

type CategoryMetadata struct {
    Connections CategoryMetadataConnections `json:"connections"`
    Interactions CategoryMetadataInteractions `json:"interactions"`
    
}

type CategoryParent struct {
    Link string `json:"link"`
    Name string `json:"name"`
    URI string `json:"uri"`
    
}

type CategorySubcategories struct {
    Link string `json:"link"`
    Name string `json:"name"`
    URI string `json:"uri"`
    
}

type Category struct {
    Icon *Picture `json:"icon,omitempty"`
    LastVideoFeaturedTime string `json:"last_video_featured_time"`
    Link string `json:"link"`
    Metadata CategoryMetadata `json:"metadata"`
    Name string `json:"name"`
    Parent CategoryParent `json:"parent"`
    Pictures Picture `json:"pictures"`
    ResourceKey string `json:"resource_key"`
    Subcategories []CategorySubcategories `json:"subcategories,omitempty"`
    TopLevel bool `json:"top_level"`
    URI string `json:"uri"`
    
}

