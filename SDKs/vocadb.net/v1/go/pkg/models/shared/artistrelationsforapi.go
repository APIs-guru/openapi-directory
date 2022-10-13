package shared

type ArtistRelationsForAPI struct {
	LatestAlbums  []AlbumForAPIContract        `json:"latestAlbums"`
	LatestEvents  []ReleaseEventForAPIContract `json:"latestEvents"`
	LatestSongs   []SongForAPIContract         `json:"latestSongs"`
	PopularAlbums []AlbumForAPIContract        `json:"popularAlbums"`
	PopularSongs  []SongForAPIContract         `json:"popularSongs"`
}
