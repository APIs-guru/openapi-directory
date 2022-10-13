package shared

type Address struct {
	AddressLine1                 *string `json:"address_line_1"`
	AddressLine2                 *string `json:"address_line_2"`
	AddressLine3                 *string `json:"address_line_3"`
	AdministrativeDistrictLevel1 *string `json:"administrative_district_level_1"`
	AdministrativeDistrictLevel2 *string `json:"administrative_district_level_2"`
	AdministrativeDistrictLevel3 *string `json:"administrative_district_level_3"`
	Country                      *string `json:"country"`
	FirstName                    *string `json:"first_name"`
	LastName                     *string `json:"last_name"`
	Locality                     *string `json:"locality"`
	Organization                 *string `json:"organization"`
	PostalCode                   *string `json:"postal_code"`
	Sublocality                  *string `json:"sublocality"`
	Sublocality2                 *string `json:"sublocality_2"`
	Sublocality3                 *string `json:"sublocality_3"`
}
