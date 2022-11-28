package shared

type ListAccountsResponseLinks struct {
	Next string `json:"next"`
	Prev string `json:"prev"`
}

// ListAccountsResponse
// Successful response to get all accounts. This returns a paginated list of
// accounts, which can be scrolled by following the `prev` and `next` links
// if present.
type ListAccountsResponse struct {
	Data  []AccountResource         `json:"data"`
	Links ListAccountsResponseLinks `json:"links"`
}
