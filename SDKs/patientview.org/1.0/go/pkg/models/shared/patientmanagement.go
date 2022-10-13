package shared

type PatientManagement struct {
	Condition     *FhirCondition     `json:"condition"`
	Encounters    []FhirEncounter    `json:"encounters"`
	GroupCode     *string            `json:"groupCode"`
	Identifier    *string            `json:"identifier"`
	Observations  []FhirObservation  `json:"observations"`
	Patient       *FhirPatient       `json:"patient"`
	Practitioners []FhirPractitioner `json:"practitioners"`
}
