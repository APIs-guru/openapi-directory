package shared

type CollectionMetadata struct {
	Count  *int64 `json:"count"`
	Limit  *int64 `json:"limit"`
	Offset *int64 `json:"offset"`
}
