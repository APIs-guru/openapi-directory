package shared

type Address struct {
	City    *string     `json:"city"`
	Country CountryEnum `json:"country"`
	County  *string     `json:"county"`
	Street1 *string     `json:"street1"`
	Street2 *string     `json:"street2"`
	Zip     *string     `json:"zip"`
}
