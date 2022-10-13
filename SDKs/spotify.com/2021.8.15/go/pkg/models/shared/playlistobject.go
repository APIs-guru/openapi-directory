package shared

type PlaylistObjectTracks struct {
	Href     *string               `json:"href"`
	Items    []PlaylistTrackObject `json:"items"`
	Limit    *int32                `json:"limit"`
	Next     *string               `json:"next"`
	Offset   *int32                `json:"offset"`
	Previous *string               `json:"previous"`
	Total    *int32                `json:"total"`
}

type PlaylistObject struct {
	Collaborative *bool                 `json:"collaborative"`
	Description   *string               `json:"description"`
	ExternalUrls  *ExternalURLObject    `json:"external_urls"`
	Followers     *FollowersObject      `json:"followers"`
	Href          *string               `json:"href"`
	ID            *string               `json:"id"`
	Images        []ImageObject         `json:"images"`
	Name          *string               `json:"name"`
	Owner         *PublicUserObject     `json:"owner"`
	Public        *bool                 `json:"public"`
	SnapshotID    *string               `json:"snapshot_id"`
	Tracks        *PlaylistObjectTracks `json:"tracks"`
	Type          *string               `json:"type"`
	URI           *string               `json:"uri"`
}
