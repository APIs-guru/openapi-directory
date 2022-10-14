package shared

type ReimbursementType struct {
	AccountCode         *string `json:"AccountCode,omitempty"`
	CurrentRecord       *bool   `json:"CurrentRecord,omitempty"`
	Name                *string `json:"Name,omitempty"`
	ReimbursementTypeID *string `json:"ReimbursementTypeID,omitempty"`
	UpdatedDateUtc      *string `json:"UpdatedDateUTC,omitempty"`
}
