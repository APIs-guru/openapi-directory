package shared

type VaccineStatusRequest struct {
	BeneficiaryID string `json:"beneficiaryId"`
	Mobile        string `json:"mobile"`
}
