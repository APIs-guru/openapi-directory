package shared

type LookupsV1PhoneNumber struct {
	AddOns         *interface{} `json:"add_ons"`
	CallerName     *interface{} `json:"caller_name"`
	Carrier        *interface{} `json:"carrier"`
	CountryCode    *string      `json:"country_code"`
	NationalFormat *string      `json:"national_format"`
	PhoneNumber    *string      `json:"phone_number"`
	URL            *string      `json:"url"`
}
