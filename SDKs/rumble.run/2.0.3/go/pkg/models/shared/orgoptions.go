package shared



type OrgOptions struct {
    Description *string `json:"description,omitempty"`
    ExpirationAssetsOffline *string `json:"expiration_assets_offline,omitempty"`
    ExpirationAssetsStale *string `json:"expiration_assets_stale,omitempty"`
    ExpirationScans *string `json:"expiration_scans,omitempty"`
    ExportToken *string `json:"export_token,omitempty"`
    Name *string `json:"name,omitempty"`
    ParentID *string `json:"parent_id,omitempty"`
    Project *string `json:"project,omitempty"`
    
}

