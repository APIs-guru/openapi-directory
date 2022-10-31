package shared



type Phone struct {
    AfterHours *string `json:"after_hours,omitempty"`
    EnrollmentCoordinator *string `json:"enrollment_coordinator,omitempty"`
    Fax *string `json:"fax,omitempty"`
    Main *string `json:"main,omitempty"`
    MentalHealthClinic *string `json:"mental_health_clinic,omitempty"`
    PatientAdvocate *string `json:"patient_advocate,omitempty"`
    Pharmacy *string `json:"pharmacy,omitempty"`
    
}

