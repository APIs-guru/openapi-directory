package shared

type Organization struct {
	AssetCount              *int64  `json:"asset_count"`
	ClientID                *string `json:"client_id"`
	CreatedAt               *int64  `json:"created_at"`
	DeactivatedAt           *int64  `json:"deactivated_at"`
	Description             *string `json:"description"`
	DownloadToken           *string `json:"download_token"`
	DownloadTokenCreatedAt  *int64  `json:"download_token_created_at"`
	ExpirationAssetsOffline *int64  `json:"expiration_assets_offline"`
	ExpirationAssetsStale   *int64  `json:"expiration_assets_stale"`
	ExpirationScans         *int64  `json:"expiration_scans"`
	ExportToken             *string `json:"export_token"`
	ExportTokenCounter      *int64  `json:"export_token_counter"`
	ExportTokenCreatedAt    *int64  `json:"export_token_created_at"`
	ExportTokenLastUsedAt   *int64  `json:"export_token_last_used_at"`
	ExportTokenLastUsedBy   *string `json:"export_token_last_used_by"`
	ID                      string  `json:"id"`
	Inactive                *bool   `json:"inactive"`
	Name                    string  `json:"name"`
	ParentID                *string `json:"parent_id"`
	Permanent               *bool   `json:"permanent"`
	Project                 *bool   `json:"project"`
	ServiceCount            *int64  `json:"service_count"`
	ServiceCountArp         *int64  `json:"service_count_arp"`
	ServiceCountIcmp        *int64  `json:"service_count_icmp"`
	ServiceCountTCP         *int64  `json:"service_count_tcp"`
	ServiceCountUDP         *int64  `json:"service_count_udp"`
	UpdatedAt               *int64  `json:"updated_at"`
}
