package shared

type SaveSubTransaction struct {
	Amount     int64   `json:"amount"`
	CategoryID *string `json:"category_id"`
	Memo       *string `json:"memo"`
	PayeeID    *string `json:"payee_id"`
	PayeeName  *string `json:"payee_name"`
}
