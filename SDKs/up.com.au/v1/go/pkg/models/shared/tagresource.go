package shared

type TagResourceRelationshipsTransactionsLinks struct {
	Related string `json:"related"`
}

type TagResourceRelationshipsTransactions struct {
	Links *TagResourceRelationshipsTransactionsLinks `json:"links,omitempty"`
}

type TagResourceRelationships struct {
	Transactions TagResourceRelationshipsTransactions `json:"transactions"`
}

// TagResource
// Provides information about a tag.
type TagResource struct {
	ID            string                   `json:"id"`
	Relationships TagResourceRelationships `json:"relationships"`
	Type          string                   `json:"type"`
}
