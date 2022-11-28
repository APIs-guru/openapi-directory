package shared

type Patient struct {
	DiagnosisCodes    []Code
	FhirAllergies     []FhirAllergy
	FhirConditions    []FhirCondition
	FhirEncounters    []FhirEncounter
	FhirObservations  []FhirObservation
	FhirPatient       *FhirPatient
	FhirPractitioners []FhirPractitioner
	Group             *Group
	ID                *int64
}
