package shared

type PagedResultsPublicContinuationToken struct {
	NextPartitionKey *string `json:"nextPartitionKey,omitempty"`
	NextRowKey       *string `json:"nextRowKey,omitempty"`
	NextTableName    *string `json:"nextTableName,omitempty"`
}
