package shared

type DetailedService struct {
	AppointmentLeadin         *string                   `json:"appointment_leadin"`
	AppointmentPhones         []AppointmentPhoneNumber  `json:"appointment_phones"`
	DescriptionFacility       *string                   `json:"description_facility"`
	Name                      *string                   `json:"name"`
	OnlineSchedulingAvailable *string                   `json:"online_scheduling_available"`
	Path                      *string                   `json:"path"`
	ReferralRequired          *string                   `json:"referral_required"`
	ServiceLocations          []DetailedServiceLocation `json:"service_locations"`
	WalkInsAccepted           *string                   `json:"walk_ins_accepted"`
}
