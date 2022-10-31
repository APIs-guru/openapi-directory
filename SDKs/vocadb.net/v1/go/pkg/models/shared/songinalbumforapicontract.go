package shared



type SongInAlbumForAPIContract struct {
    DiscNumber *int32 `json:"discNumber,omitempty"`
    ID *int32 `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Song *SongForAPIContract `json:"song,omitempty"`
    TrackNumber *int32 `json:"trackNumber,omitempty"`
    
}

