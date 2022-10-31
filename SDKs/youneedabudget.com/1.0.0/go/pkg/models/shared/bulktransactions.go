package shared

type BulkTransactions struct {
	Transactions []SaveTransaction `json:"transactions"`
}
