package shared

// AppointmentPhoneNumber
// Phone number information for scheduling an appointment.
type AppointmentPhoneNumber struct {
	Extension *string `json:"extension,omitempty"`
	Label     *string `json:"label,omitempty"`
	Number    *string `json:"number,omitempty"`
	Type      *string `json:"type,omitempty"`
}
