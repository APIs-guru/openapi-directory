package shared

// OnDemandGenreInteractionsPage
// Interactions for On Demand pages that are in this genre.
type OnDemandGenreInteractionsPage struct {
	Added   bool     `json:"added"`
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

type OnDemandGenreInteractions struct {
	Page OnDemandGenreInteractionsPage `json:"page"`
}

// OnDemandGenreMetadataConnectionsPages
// Information about the On Demand pages related to this group.
type OnDemandGenreMetadataConnectionsPages struct {
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

// OnDemandGenreMetadataConnections
// A collection of information connected to this resource.
type OnDemandGenreMetadataConnections struct {
	Pages OnDemandGenreMetadataConnectionsPages `json:"pages"`
}

type OnDemandGenreMetadata struct {
	Connections OnDemandGenreMetadataConnections `json:"connections"`
}

type OnDemandGenre struct {
	Canonical    string                    `json:"canonical"`
	Interactions OnDemandGenreInteractions `json:"interactions"`
	Link         string                    `json:"link"`
	Metadata     OnDemandGenreMetadata     `json:"metadata"`
	Name         string                    `json:"name"`
	URI          string                    `json:"uri"`
}
