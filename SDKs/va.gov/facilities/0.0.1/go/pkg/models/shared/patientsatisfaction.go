package shared

type PatientSatisfaction struct {
	PrimaryCareRoutine   *float32 `json:"primary_care_routine"`
	PrimaryCareUrgent    *float32 `json:"primary_care_urgent"`
	SpecialtyCareRoutine *float32 `json:"specialty_care_routine"`
	SpecialtyCareUrgent  *float32 `json:"specialty_care_urgent"`
}
