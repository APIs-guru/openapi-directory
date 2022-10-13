package shared

type Merchant struct {
	BusinessName   *string `json:"business_name"`
	Country        string  `json:"country"`
	Currency       *string `json:"currency"`
	ID             *string `json:"id"`
	LanguageCode   *string `json:"language_code"`
	MainLocationID *string `json:"main_location_id"`
	Status         *string `json:"status"`
}
