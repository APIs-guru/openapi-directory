package shared

type RelatedSongsContract struct {
	ArtistMatches []SongForAPIContract `json:"artistMatches,omitempty"`
	LikeMatches   []SongForAPIContract `json:"likeMatches,omitempty"`
	TagMatches    []SongForAPIContract `json:"tagMatches,omitempty"`
}
