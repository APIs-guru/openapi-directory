package shared



type BatchRetrieveInventoryCountsRequest struct {
    CatalogObjectIds []string `json:"catalog_object_ids,omitempty"`
    Cursor *string `json:"cursor,omitempty"`
    LocationIds []string `json:"location_ids,omitempty"`
    States []string `json:"states,omitempty"`
    UpdatedAfter *string `json:"updated_after,omitempty"`
    
}

