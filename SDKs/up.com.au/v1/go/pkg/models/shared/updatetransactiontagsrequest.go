package shared

// UpdateTransactionTagsRequest
// Request to add or remove tags associated with a transaction.
type UpdateTransactionTagsRequest struct {
	Data []TagInputResourceIdentifier `json:"data"`
}
