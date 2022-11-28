package shared

// AlbumObjectTracks
// The tracks of the album.
// https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
type AlbumObjectTracks struct {
	Href     *string                 `json:"href,omitempty"`
	Items    []SimplifiedTrackObject `json:"items,omitempty"`
	Limit    *int32                  `json:"limit,omitempty"`
	Next     *string                 `json:"next,omitempty"`
	Offset   *int32                  `json:"offset,omitempty"`
	Previous *string                 `json:"previous,omitempty"`
	Total    *int32                  `json:"total,omitempty"`
}

// AlbumObject

// https://developer.spotify.com/documentation/web-api/reference/#object-albumobject - Find more info on the official Spotify Web API Reference
type AlbumObject struct {
	AlbumType            *string                 `json:"album_type,omitempty"`
	Artists              []ArtistObject          `json:"artists,omitempty"`
	AvailableMarkets     []string                `json:"available_markets,omitempty"`
	Copyrights           []CopyrightObject       `json:"copyrights,omitempty"`
	ExternalIds          *ExternalIDObject       `json:"external_ids,omitempty"`
	ExternalUrls         *ExternalURLObject      `json:"external_urls,omitempty"`
	Genres               []string                `json:"genres,omitempty"`
	Href                 *string                 `json:"href,omitempty"`
	ID                   *string                 `json:"id,omitempty"`
	Images               []ImageObject           `json:"images,omitempty"`
	Label                *string                 `json:"label,omitempty"`
	Name                 *string                 `json:"name,omitempty"`
	Popularity           *int32                  `json:"popularity,omitempty"`
	ReleaseDate          *string                 `json:"release_date,omitempty"`
	ReleaseDatePrecision *string                 `json:"release_date_precision,omitempty"`
	Restrictions         *AlbumRestrictionObject `json:"restrictions,omitempty"`
	TotalTracks          *int32                  `json:"total_tracks,omitempty"`
	Tracks               *AlbumObjectTracks      `json:"tracks,omitempty"`
	Type                 *string                 `json:"type,omitempty"`
	URI                  *string                 `json:"uri,omitempty"`
}
