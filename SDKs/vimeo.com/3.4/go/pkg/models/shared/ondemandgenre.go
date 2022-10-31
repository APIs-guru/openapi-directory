package shared

type OnDemandGenreInteractionsPage struct {
	Added   bool     `json:"added"`
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

type OnDemandGenreInteractions struct {
	Page OnDemandGenreInteractionsPage `json:"page"`
}

type OnDemandGenreMetadataConnectionsPages struct {
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

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
