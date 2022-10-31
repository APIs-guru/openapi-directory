package shared



type DeleteCatalogObjectResponse struct {
    DeletedAt *string `json:"deleted_at,omitempty"`
    DeletedObjectIds []string `json:"deleted_object_ids,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    
}

