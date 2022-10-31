package shared



type ControllersSystemAdvisoryItemAttributes struct {
    AdvisoryType *int64 `json:"advisory_type,omitempty"`
    CveCount *int64 `json:"cve_count,omitempty"`
    Description *string `json:"description,omitempty"`
    PublicDate *string `json:"public_date,omitempty"`
    Severity *int64 `json:"severity,omitempty"`
    Synopsis *string `json:"synopsis,omitempty"`
    
}

