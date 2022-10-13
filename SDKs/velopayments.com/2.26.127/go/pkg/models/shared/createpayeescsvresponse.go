package shared

type CreatePayeesCsvResponse struct {
	BatchID         *string       `json:"batchId"`
	RejectedCsvRows []interface{} `json:"rejectedCsvRows"`
}
