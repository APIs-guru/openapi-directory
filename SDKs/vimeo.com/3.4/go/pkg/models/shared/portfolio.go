package shared

type PortfolioMetadataConnectionsVideos struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

type PortfolioMetadataConnections struct {
	Videos PortfolioMetadataConnectionsVideos `json:"videos"`
}

type PortfolioMetadata struct {
	Connections PortfolioMetadataConnections `json:"connections"`
}

type PortfolioSortEnum string

const (
	PortfolioSortEnumAlphabetical PortfolioSortEnum = "alphabetical"
	PortfolioSortEnumClips        PortfolioSortEnum = "clips"
	PortfolioSortEnumModified     PortfolioSortEnum = "modified"
	PortfolioSortEnumRecent       PortfolioSortEnum = "recent"
)

type Portfolio struct {
	CreatedTime  string            `json:"created_time"`
	Description  string            `json:"description"`
	Link         string            `json:"link"`
	Metadata     PortfolioMetadata `json:"metadata"`
	ModifiedTime string            `json:"modified_time"`
	Name         string            `json:"name"`
	Sort         PortfolioSortEnum `json:"sort"`
	URI          string            `json:"uri"`
}
