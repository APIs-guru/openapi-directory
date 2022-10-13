package shared

type Vaccine struct {
	Dose              *float64 `json:"dose"`
	IdentityType      *string  `json:"identityType"`
	IdentityValue     *string  `json:"identityValue"`
	VaccinatedBy      *string  `json:"vaccinatedBy"`
	VaccinationDate   *string  `json:"vaccinationDate"`
	VaccinationPlace  *string  `json:"vaccinationPlace"`
	VaccinationStatus *string  `json:"vaccinationStatus"`
	VaccineName       *string  `json:"vaccineName"`
}
