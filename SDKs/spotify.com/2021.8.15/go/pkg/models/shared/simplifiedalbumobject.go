package shared

type SimplifiedAlbumObject struct {
	AlbumGroup           *string                  `json:"album_group"`
	AlbumType            *string                  `json:"album_type"`
	Artists              []SimplifiedArtistObject `json:"artists"`
	AvailableMarkets     []string                 `json:"available_markets"`
	ExternalUrls         *ExternalURLObject       `json:"external_urls"`
	Href                 *string                  `json:"href"`
	ID                   *string                  `json:"id"`
	Images               []ImageObject            `json:"images"`
	Name                 *string                  `json:"name"`
	ReleaseDate          *string                  `json:"release_date"`
	ReleaseDatePrecision *string                  `json:"release_date_precision"`
	Restrictions         *AlbumRestrictionObject  `json:"restrictions"`
	TotalTracks          *int32                   `json:"total_tracks"`
	Type                 *string                  `json:"type"`
	URI                  *string                  `json:"uri"`
}
