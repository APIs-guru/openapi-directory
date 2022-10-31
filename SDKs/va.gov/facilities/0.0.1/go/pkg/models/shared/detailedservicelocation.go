package shared



type DetailedServiceLocation struct {
    AdditionalHoursInfo *string `json:"additional_hours_info,omitempty"`
    AppointmentPhones []AppointmentPhoneNumber `json:"appointment_phones,omitempty"`
    EmailContacts []DetailedServiceEmailContact `json:"email_contacts,omitempty"`
    FacilityServiceHours *DetailedServiceHours `json:"facility_service_hours,omitempty"`
    ServiceLocationAddress *DetailedServiceAddress `json:"service_location_address,omitempty"`
    
}

