package shared

type SongInListForAPIContract struct {
	Notes *string             `json:"notes"`
	Order *int32              `json:"order"`
	Song  *SongForAPIContract `json:"song"`
}
