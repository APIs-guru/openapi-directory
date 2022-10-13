package shared

type RelatedSongsContract struct {
	ArtistMatches []SongForAPIContract `json:"artistMatches"`
	LikeMatches   []SongForAPIContract `json:"likeMatches"`
	TagMatches    []SongForAPIContract `json:"tagMatches"`
}
