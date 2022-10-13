package shared

type DetailedServiceLocation struct {
	AdditionalHoursInfo    *string                       `json:"additional_hours_info"`
	AppointmentPhones      []AppointmentPhoneNumber      `json:"appointment_phones"`
	EmailContacts          []DetailedServiceEmailContact `json:"email_contacts"`
	FacilityServiceHours   *DetailedServiceHours         `json:"facility_service_hours"`
	ServiceLocationAddress *DetailedServiceAddress       `json:"service_location_address"`
}
