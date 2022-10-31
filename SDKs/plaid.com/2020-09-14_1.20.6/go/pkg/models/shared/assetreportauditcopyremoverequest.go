package shared



type AssetReportAuditCopyRemoveRequest struct {
    AuditCopyToken string `json:"audit_copy_token"`
    ClientID *string `json:"client_id,omitempty"`
    Secret *string `json:"secret,omitempty"`
    
}

