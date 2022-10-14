package shared

type SimplifiedPlaylistObject struct {
	Collaborative *bool                    `json:"collaborative,omitempty"`
	Description   *string                  `json:"description,omitempty"`
	ExternalUrls  *ExternalURLObject       `json:"external_urls,omitempty"`
	Href          *string                  `json:"href,omitempty"`
	ID            *string                  `json:"id,omitempty"`
	Images        []ImageObject            `json:"images,omitempty"`
	Name          *string                  `json:"name,omitempty"`
	Owner         *PublicUserObject        `json:"owner,omitempty"`
	Public        *bool                    `json:"public,omitempty"`
	SnapshotID    *string                  `json:"snapshot_id,omitempty"`
	Tracks        *PlaylistTracksRefObject `json:"tracks,omitempty"`
	Type          *string                  `json:"type,omitempty"`
	URI           *string                  `json:"uri,omitempty"`
}
