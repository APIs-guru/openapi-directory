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

type TagResource struct {
	ID            string                   `json:"id"`
	Relationships TagResourceRelationships `json:"relationships"`
	Type          string                   `json:"type"`
}
