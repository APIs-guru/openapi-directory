package shared

type SaveTransactionsWrapper struct {
	Transaction  *SaveTransaction  `json:"transaction"`
	Transactions []SaveTransaction `json:"transactions"`
}
