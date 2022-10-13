package shared

type OrgOptions struct {
	Description             *string `json:"description"`
	ExpirationAssetsOffline *string `json:"expiration_assets_offline"`
	ExpirationAssetsStale   *string `json:"expiration_assets_stale"`
	ExpirationScans         *string `json:"expiration_scans"`
	ExportToken             *string `json:"export_token"`
	Name                    *string `json:"name"`
	ParentID                *string `json:"parent_id"`
	Project                 *string `json:"project"`
}
