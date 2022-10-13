package shared

type TrackObject struct {
	Album            *SimplifiedAlbumObject  `json:"album"`
	Artists          []ArtistObject          `json:"artists"`
	AvailableMarkets []string                `json:"available_markets"`
	DiscNumber       *int32                  `json:"disc_number"`
	DurationMs       *int32                  `json:"duration_ms"`
	Explicit         *bool                   `json:"explicit"`
	ExternalIds      *ExternalIDObject       `json:"external_ids"`
	ExternalUrls     *ExternalURLObject      `json:"external_urls"`
	Href             *string                 `json:"href"`
	ID               *string                 `json:"id"`
	IsLocal          *bool                   `json:"is_local"`
	IsPlayable       *bool                   `json:"is_playable"`
	LinkedFrom       *LinkedTrackObject      `json:"linked_from"`
	Name             *string                 `json:"name"`
	Popularity       *int32                  `json:"popularity"`
	PreviewURL       *string                 `json:"preview_url"`
	Restrictions     *TrackRestrictionObject `json:"restrictions"`
	TrackNumber      *int32                  `json:"track_number"`
	Type             *string                 `json:"type"`
	URI              *string                 `json:"uri"`
}
