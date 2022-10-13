package shared

type ReimbursementType struct {
	AccountCode         *string `json:"AccountCode"`
	CurrentRecord       *bool   `json:"CurrentRecord"`
	Name                *string `json:"Name"`
	ReimbursementTypeID *string `json:"ReimbursementTypeID"`
	UpdatedDateUtc      *string `json:"UpdatedDateUTC"`
}
