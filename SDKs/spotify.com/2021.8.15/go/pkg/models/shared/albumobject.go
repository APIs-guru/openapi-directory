package shared

type AlbumObjectTracks struct {
	Href     *string                 `json:"href"`
	Items    []SimplifiedTrackObject `json:"items"`
	Limit    *int32                  `json:"limit"`
	Next     *string                 `json:"next"`
	Offset   *int32                  `json:"offset"`
	Previous *string                 `json:"previous"`
	Total    *int32                  `json:"total"`
}

type AlbumObject struct {
	AlbumType            *string                 `json:"album_type"`
	Artists              []ArtistObject          `json:"artists"`
	AvailableMarkets     []string                `json:"available_markets"`
	Copyrights           []CopyrightObject       `json:"copyrights"`
	ExternalIds          *ExternalIDObject       `json:"external_ids"`
	ExternalUrls         *ExternalURLObject      `json:"external_urls"`
	Genres               []string                `json:"genres"`
	Href                 *string                 `json:"href"`
	ID                   *string                 `json:"id"`
	Images               []ImageObject           `json:"images"`
	Label                *string                 `json:"label"`
	Name                 *string                 `json:"name"`
	Popularity           *int32                  `json:"popularity"`
	ReleaseDate          *string                 `json:"release_date"`
	ReleaseDatePrecision *string                 `json:"release_date_precision"`
	Restrictions         *AlbumRestrictionObject `json:"restrictions"`
	TotalTracks          *int32                  `json:"total_tracks"`
	Tracks               *AlbumObjectTracks      `json:"tracks"`
	Type                 *string                 `json:"type"`
	URI                  *string                 `json:"uri"`
}
