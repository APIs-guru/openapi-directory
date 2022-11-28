package shared

// GetAccountResponse
// Successful response to get a single account.
type GetAccountResponse struct {
	Data AccountResource `json:"data"`
}
