package shared



type SimplifiedAlbumObject struct {
    AlbumGroup *string `json:"album_group,omitempty"`
    AlbumType *string `json:"album_type,omitempty"`
    Artists []SimplifiedArtistObject `json:"artists,omitempty"`
    AvailableMarkets []string `json:"available_markets,omitempty"`
    ExternalUrls *ExternalURLObject `json:"external_urls,omitempty"`
    Href *string `json:"href,omitempty"`
    ID *string `json:"id,omitempty"`
    Images []ImageObject `json:"images,omitempty"`
    Name *string `json:"name,omitempty"`
    ReleaseDate *string `json:"release_date,omitempty"`
    ReleaseDatePrecision *string `json:"release_date_precision,omitempty"`
    Restrictions *AlbumRestrictionObject `json:"restrictions,omitempty"`
    TotalTracks *int32 `json:"total_tracks,omitempty"`
    Type *string `json:"type,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

