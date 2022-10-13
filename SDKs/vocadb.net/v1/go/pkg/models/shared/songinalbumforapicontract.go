package shared

type SongInAlbumForAPIContract struct {
	DiscNumber  *int32              `json:"discNumber"`
	ID          *int32              `json:"id"`
	Name        *string             `json:"name"`
	Song        *SongForAPIContract `json:"song"`
	TrackNumber *int32              `json:"trackNumber"`
}
