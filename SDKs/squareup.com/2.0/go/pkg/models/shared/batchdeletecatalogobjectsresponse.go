package shared

type BatchDeleteCatalogObjectsResponse struct {
	DeletedAt        *string  `json:"deleted_at"`
	DeletedObjectIds []string `json:"deleted_object_ids"`
	Errors           []Error  `json:"errors"`
}
