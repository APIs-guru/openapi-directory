package shared

type CreatePayeesCsvResponse struct {
	BatchID         *string       `json:"batchId,omitempty"`
	RejectedCsvRows []interface{} `json:"rejectedCsvRows,omitempty"`
}
