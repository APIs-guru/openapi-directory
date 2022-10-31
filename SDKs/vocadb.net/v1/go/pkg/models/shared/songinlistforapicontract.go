package shared

type SongInListForAPIContract struct {
	Notes *string             `json:"notes,omitempty"`
	Order *int32              `json:"order,omitempty"`
	Song  *SongForAPIContract `json:"song,omitempty"`
}
