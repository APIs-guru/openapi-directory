package shared

type Vaccine struct {
	Dose              *string `json:"dose,omitempty"`
	IdentityType      *string `json:"identityType,omitempty"`
	IdentityValue     *string `json:"identityValue,omitempty"`
	VaccinatedBy      *string `json:"vaccinatedBy,omitempty"`
	VaccinationDate   *string `json:"vaccinationDate,omitempty"`
	VaccinationPlace  *string `json:"vaccinationPlace,omitempty"`
	VaccinationStatus *string `json:"vaccinationStatus,omitempty"`
	VaccineName       *string `json:"vaccineName,omitempty"`
}
