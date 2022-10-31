package shared



type ArtistRelationsForAPI struct {
    LatestAlbums []AlbumForAPIContract `json:"latestAlbums,omitempty"`
    LatestEvents []ReleaseEventForAPIContract `json:"latestEvents,omitempty"`
    LatestSongs []SongForAPIContract `json:"latestSongs,omitempty"`
    PopularAlbums []AlbumForAPIContract `json:"popularAlbums,omitempty"`
    PopularSongs []SongForAPIContract `json:"popularSongs,omitempty"`
    
}

