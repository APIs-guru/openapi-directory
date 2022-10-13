package shared

type CreatePayeesCsvResponse2 struct {
	BatchID         *string       `json:"batchId"`
	RejectedCsvRows []interface{} `json:"rejectedCsvRows"`
}
