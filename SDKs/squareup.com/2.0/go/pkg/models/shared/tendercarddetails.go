package shared

type TenderCardDetails struct {
	Card        *Card   `json:"card"`
	EntryMethod *string `json:"entry_method"`
	Status      *string `json:"status"`
}
