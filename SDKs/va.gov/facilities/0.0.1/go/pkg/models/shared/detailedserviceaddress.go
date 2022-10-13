package shared

type DetailedServiceAddress struct {
	AddressLine1          *string `json:"address_line1"`
	AddressLine2          *string `json:"address_line2"`
	BuildingNameNumber    *string `json:"building_name_number"`
	City                  *string `json:"city"`
	ClinicName            *string `json:"clinic_name"`
	CountryCode           *string `json:"country_code"`
	State                 *string `json:"state"`
	WingFloorOrRoomNumber *string `json:"wing_floor_or_room_number"`
	ZipCode               *string `json:"zip_code"`
}
