package shared



type PatientManagement struct {
    Condition *FhirCondition `json:"condition,omitempty"`
    Encounters []FhirEncounter `json:"encounters,omitempty"`
    GroupCode *string `json:"groupCode,omitempty"`
    Identifier *string `json:"identifier,omitempty"`
    Observations []FhirObservation `json:"observations,omitempty"`
    Patient *FhirPatient `json:"patient,omitempty"`
    Practitioners []FhirPractitioner `json:"practitioners,omitempty"`
    
}

