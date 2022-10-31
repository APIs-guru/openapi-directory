package shared

type SimplifiedTrackObject struct {
	Artists          []SimplifiedArtistObject `json:"artists,omitempty"`
	AvailableMarkets []string                 `json:"available_markets,omitempty"`
	DiscNumber       *int32                   `json:"disc_number,omitempty"`
	DurationMs       *int32                   `json:"duration_ms,omitempty"`
	Explicit         *bool                    `json:"explicit,omitempty"`
	ExternalUrls     *ExternalURLObject       `json:"external_urls,omitempty"`
	Href             *string                  `json:"href,omitempty"`
	ID               *string                  `json:"id,omitempty"`
	IsLocal          *bool                    `json:"is_local,omitempty"`
	IsPlayable       *bool                    `json:"is_playable,omitempty"`
	LinkedFrom       *LinkedTrackObject       `json:"linked_from,omitempty"`
	Name             *string                  `json:"name,omitempty"`
	PreviewURL       *string                  `json:"preview_url,omitempty"`
	Restrictions     *TrackRestrictionObject  `json:"restrictions,omitempty"`
	TrackNumber      *int32                   `json:"track_number,omitempty"`
	Type             *string                  `json:"type,omitempty"`
	URI              *string                  `json:"uri,omitempty"`
}
