package shared

// DetailedServiceAddress
// Service location address.
type DetailedServiceAddress struct {
	AddressLine1          *string `json:"address_line1,omitempty"`
	AddressLine2          *string `json:"address_line2,omitempty"`
	BuildingNameNumber    *string `json:"building_name_number,omitempty"`
	City                  *string `json:"city,omitempty"`
	ClinicName            *string `json:"clinic_name,omitempty"`
	CountryCode           *string `json:"country_code,omitempty"`
	State                 *string `json:"state,omitempty"`
	WingFloorOrRoomNumber *string `json:"wing_floor_or_room_number,omitempty"`
	ZipCode               *string `json:"zip_code,omitempty"`
}
