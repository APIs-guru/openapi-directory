package shared

type APIV2010AccountAvailablePhoneNumberCountry struct {
	Beta            *bool                  `json:"beta"`
	Country         *string                `json:"country"`
	CountryCode     *string                `json:"country_code"`
	SubresourceUris map[string]interface{} `json:"subresource_uris"`
	URI             *string                `json:"uri"`
}
