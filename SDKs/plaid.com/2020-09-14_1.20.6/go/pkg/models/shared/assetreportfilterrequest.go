package shared



type AssetReportFilterRequest struct {
    AccountIdsToExclude []string `json:"account_ids_to_exclude"`
    AssetReportToken string `json:"asset_report_token"`
    ClientID *string `json:"client_id,omitempty"`
    Secret *string `json:"secret,omitempty"`
    
}

