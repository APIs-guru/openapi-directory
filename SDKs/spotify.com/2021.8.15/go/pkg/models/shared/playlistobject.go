package shared

type PlaylistObjectTracks struct {
	Href     *string               `json:"href,omitempty"`
	Items    []PlaylistTrackObject `json:"items,omitempty"`
	Limit    *int32                `json:"limit,omitempty"`
	Next     *string               `json:"next,omitempty"`
	Offset   *int32                `json:"offset,omitempty"`
	Previous *string               `json:"previous,omitempty"`
	Total    *int32                `json:"total,omitempty"`
}

type PlaylistObject struct {
	Collaborative *bool                 `json:"collaborative,omitempty"`
	Description   *string               `json:"description,omitempty"`
	ExternalUrls  *ExternalURLObject    `json:"external_urls,omitempty"`
	Followers     *FollowersObject      `json:"followers,omitempty"`
	Href          *string               `json:"href,omitempty"`
	ID            *string               `json:"id,omitempty"`
	Images        []ImageObject         `json:"images,omitempty"`
	Name          *string               `json:"name,omitempty"`
	Owner         *PublicUserObject     `json:"owner,omitempty"`
	Public        *bool                 `json:"public,omitempty"`
	SnapshotID    *string               `json:"snapshot_id,omitempty"`
	Tracks        *PlaylistObjectTracks `json:"tracks,omitempty"`
	Type          *string               `json:"type,omitempty"`
	URI           *string               `json:"uri,omitempty"`
}
