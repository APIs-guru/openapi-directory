package shared



type BatchRetrieveInventoryChangesRequest struct {
    CatalogObjectIds []string `json:"catalog_object_ids,omitempty"`
    Cursor *string `json:"cursor,omitempty"`
    LocationIds []string `json:"location_ids,omitempty"`
    States []string `json:"states,omitempty"`
    Types []string `json:"types,omitempty"`
    UpdatedAfter *string `json:"updated_after,omitempty"`
    UpdatedBefore *string `json:"updated_before,omitempty"`
    
}

