package shared

type AppointmentPhoneNumber struct {
	Extension *string `json:"extension"`
	Label     *string `json:"label"`
	Number    *string `json:"number"`
	Type      *string `json:"type"`
}
