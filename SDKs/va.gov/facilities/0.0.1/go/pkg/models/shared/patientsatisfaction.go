package shared

// PatientSatisfaction
// Veteran-reported satisfaction scores for health care services
type PatientSatisfaction struct {
	PrimaryCareRoutine   *float32 `json:"primary_care_routine,omitempty"`
	PrimaryCareUrgent    *float32 `json:"primary_care_urgent,omitempty"`
	SpecialtyCareRoutine *float32 `json:"specialty_care_routine,omitempty"`
	SpecialtyCareUrgent  *float32 `json:"specialty_care_urgent,omitempty"`
}
