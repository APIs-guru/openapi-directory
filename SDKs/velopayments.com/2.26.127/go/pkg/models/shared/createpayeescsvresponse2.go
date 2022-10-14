package shared

type CreatePayeesCsvResponse2 struct {
	BatchID         *string       `json:"batchId,omitempty"`
	RejectedCsvRows []interface{} `json:"rejectedCsvRows,omitempty"`
}
