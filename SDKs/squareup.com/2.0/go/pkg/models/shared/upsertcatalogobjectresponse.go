package shared

type UpsertCatalogObjectResponse struct {
	CatalogObject *CatalogObject     `json:"catalog_object"`
	Errors        []Error            `json:"errors"`
	IDMappings    []CatalogIDMapping `json:"id_mappings"`
}
