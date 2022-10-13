package shared

type PagedResultsPublicContinuationToken struct {
	NextPartitionKey *string `json:"nextPartitionKey"`
	NextRowKey       *string `json:"nextRowKey"`
	NextTableName    *string `json:"nextTableName"`
}
