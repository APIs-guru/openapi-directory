package shared

type SongInListEditContractInput struct {
	Notes        *string                  `json:"notes,omitempty"`
	Order        *int32                   `json:"order,omitempty"`
	Song         *SongForAPIContractInput `json:"song,omitempty"`
	SongInListID *int32                   `json:"songInListId,omitempty"`
}
