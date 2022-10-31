package shared



type Organization struct {
    AssetCount *int64 `json:"asset_count,omitempty"`
    ClientID *string `json:"client_id,omitempty"`
    CreatedAt *int64 `json:"created_at,omitempty"`
    DeactivatedAt *int64 `json:"deactivated_at,omitempty"`
    Description *string `json:"description,omitempty"`
    DownloadToken *string `json:"download_token,omitempty"`
    DownloadTokenCreatedAt *int64 `json:"download_token_created_at,omitempty"`
    ExpirationAssetsOffline *int64 `json:"expiration_assets_offline,omitempty"`
    ExpirationAssetsStale *int64 `json:"expiration_assets_stale,omitempty"`
    ExpirationScans *int64 `json:"expiration_scans,omitempty"`
    ExportToken *string `json:"export_token,omitempty"`
    ExportTokenCounter *int64 `json:"export_token_counter,omitempty"`
    ExportTokenCreatedAt *int64 `json:"export_token_created_at,omitempty"`
    ExportTokenLastUsedAt *int64 `json:"export_token_last_used_at,omitempty"`
    ExportTokenLastUsedBy *string `json:"export_token_last_used_by,omitempty"`
    ID string `json:"id"`
    Inactive *bool `json:"inactive,omitempty"`
    Name string `json:"name"`
    ParentID *string `json:"parent_id,omitempty"`
    Permanent *bool `json:"permanent,omitempty"`
    Project *bool `json:"project,omitempty"`
    ServiceCount *int64 `json:"service_count,omitempty"`
    ServiceCountArp *int64 `json:"service_count_arp,omitempty"`
    ServiceCountIcmp *int64 `json:"service_count_icmp,omitempty"`
    ServiceCountTCP *int64 `json:"service_count_tcp,omitempty"`
    ServiceCountUDP *int64 `json:"service_count_udp,omitempty"`
    UpdatedAt *int64 `json:"updated_at,omitempty"`
    
}

