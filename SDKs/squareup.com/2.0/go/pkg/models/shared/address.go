package shared

type Address struct {
	AddressLine1                 *string `json:"address_line_1,omitempty"`
	AddressLine2                 *string `json:"address_line_2,omitempty"`
	AddressLine3                 *string `json:"address_line_3,omitempty"`
	AdministrativeDistrictLevel1 *string `json:"administrative_district_level_1,omitempty"`
	AdministrativeDistrictLevel2 *string `json:"administrative_district_level_2,omitempty"`
	AdministrativeDistrictLevel3 *string `json:"administrative_district_level_3,omitempty"`
	Country                      *string `json:"country,omitempty"`
	FirstName                    *string `json:"first_name,omitempty"`
	LastName                     *string `json:"last_name,omitempty"`
	Locality                     *string `json:"locality,omitempty"`
	Organization                 *string `json:"organization,omitempty"`
	PostalCode                   *string `json:"postal_code,omitempty"`
	Sublocality                  *string `json:"sublocality,omitempty"`
	Sublocality2                 *string `json:"sublocality_2,omitempty"`
	Sublocality3                 *string `json:"sublocality_3,omitempty"`
}
