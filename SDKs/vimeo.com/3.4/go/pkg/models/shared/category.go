package shared

// CategoryMetadataConnectionsChannels
// Information about the channels related to this category.
type CategoryMetadataConnectionsChannels struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// CategoryMetadataConnectionsGroups
// Information about the groups related to this category.
type CategoryMetadataConnectionsGroups struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// CategoryMetadataConnectionsUsers
// Information about the users related to this category.
type CategoryMetadataConnectionsUsers struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// CategoryMetadataConnectionsVideos
// Information about the videos related to this category.
type CategoryMetadataConnectionsVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// CategoryMetadataConnections
// A collection of information that is connected to this resource.
type CategoryMetadataConnections struct {
	Channels CategoryMetadataConnectionsChannels `json:"channels"`
	Groups   CategoryMetadataConnectionsGroups   `json:"groups"`
	Users    CategoryMetadataConnectionsUsers    `json:"users"`
	Videos   CategoryMetadataConnectionsVideos   `json:"videos"`
}

// CategoryMetadataInteractionsFollow
// An action indicating if the authenticated user has followed this category.
type CategoryMetadataInteractionsFollow struct {
	Added     bool   `json:"added"`
	AddedTime string `json:"added_time"`
	URI       string `json:"uri"`
}

// CategoryMetadataInteractions
// The permissible actions related to the category.
type CategoryMetadataInteractions struct {
	Follow CategoryMetadataInteractionsFollow `json:"follow"`
}

// CategoryMetadata
// Metadata about the category.
type CategoryMetadata struct {
	Connections  CategoryMetadataConnections  `json:"connections"`
	Interactions CategoryMetadataInteractions `json:"interactions"`
}

// CategoryParent
// The container of this category's parent category, if the current category is a subcategory.
type CategoryParent struct {
	Link string `json:"link"`
	Name string `json:"name"`
	URI  string `json:"uri"`
}

type CategorySubcategories struct {
	Link string `json:"link"`
	Name string `json:"name"`
	URI  string `json:"uri"`
}

type Category struct {
	Icon                  *Picture                `json:"icon,omitempty"`
	LastVideoFeaturedTime string                  `json:"last_video_featured_time"`
	Link                  string                  `json:"link"`
	Metadata              CategoryMetadata        `json:"metadata"`
	Name                  string                  `json:"name"`
	Parent                CategoryParent          `json:"parent"`
	Pictures              Picture                 `json:"pictures"`
	ResourceKey           string                  `json:"resource_key"`
	Subcategories         []CategorySubcategories `json:"subcategories,omitempty"`
	TopLevel              bool                    `json:"top_level"`
	URI                   string                  `json:"uri"`
}
