package shared

type TableMetadataColumnsResponse struct {
	DuplicatesConstraint *string  `json:"duplicates_constraint"`
	Keys                 []string `json:"keys"`
	LongType             *string  `json:"longType"`
	Name                 *string  `json:"name"`
	Type                 *string  `json:"type"`
}
