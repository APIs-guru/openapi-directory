package shared

type Phone struct {
	AfterHours            *string `json:"after_hours"`
	EnrollmentCoordinator *string `json:"enrollment_coordinator"`
	Fax                   *string `json:"fax"`
	Main                  *string `json:"main"`
	MentalHealthClinic    *string `json:"mental_health_clinic"`
	PatientAdvocate       *string `json:"patient_advocate"`
	Pharmacy              *string `json:"pharmacy"`
}
