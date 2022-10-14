package shared

type SaveSubTransaction struct {
	Amount     int64   `json:"amount"`
	CategoryID *string `json:"category_id,omitempty"`
	Memo       *string `json:"memo,omitempty"`
	PayeeID    *string `json:"payee_id,omitempty"`
	PayeeName  *string `json:"payee_name,omitempty"`
}
