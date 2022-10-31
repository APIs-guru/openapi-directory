package shared

type DetailedService struct {
	AppointmentLeadin         *string                   `json:"appointment_leadin,omitempty"`
	AppointmentPhones         []AppointmentPhoneNumber  `json:"appointment_phones,omitempty"`
	DescriptionFacility       *string                   `json:"description_facility,omitempty"`
	Name                      *string                   `json:"name,omitempty"`
	OnlineSchedulingAvailable *string                   `json:"online_scheduling_available,omitempty"`
	Path                      *string                   `json:"path,omitempty"`
	ReferralRequired          *string                   `json:"referral_required,omitempty"`
	ServiceLocations          []DetailedServiceLocation `json:"service_locations,omitempty"`
	WalkInsAccepted           *string                   `json:"walk_ins_accepted,omitempty"`
}
