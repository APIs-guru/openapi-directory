package shared

type SimplifiedPlaylistObject struct {
	Collaborative *bool                    `json:"collaborative"`
	Description   *string                  `json:"description"`
	ExternalUrls  *ExternalURLObject       `json:"external_urls"`
	Href          *string                  `json:"href"`
	ID            *string                  `json:"id"`
	Images        []ImageObject            `json:"images"`
	Name          *string                  `json:"name"`
	Owner         *PublicUserObject        `json:"owner"`
	Public        *bool                    `json:"public"`
	SnapshotID    *string                  `json:"snapshot_id"`
	Tracks        *PlaylistTracksRefObject `json:"tracks"`
	Type          *string                  `json:"type"`
	URI           *string                  `json:"uri"`
}
