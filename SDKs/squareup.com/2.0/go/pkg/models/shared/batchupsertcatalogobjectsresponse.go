package shared

type BatchUpsertCatalogObjectsResponse struct {
	Errors     []Error            `json:"errors"`
	IDMappings []CatalogIDMapping `json:"id_mappings"`
	Objects    []CatalogObject    `json:"objects"`
	UpdatedAt  *string            `json:"updated_at"`
}
