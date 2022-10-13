package shared

type DeleteCatalogObjectResponse struct {
	DeletedAt        *string  `json:"deleted_at"`
	DeletedObjectIds []string `json:"deleted_object_ids"`
	Errors           []Error  `json:"errors"`
}
