package shared

type Location struct {
	Address           *Address       `json:"address"`
	BusinessEmail     *string        `json:"business_email"`
	BusinessHours     *BusinessHours `json:"business_hours"`
	BusinessName      *string        `json:"business_name"`
	Capabilities      []string       `json:"capabilities"`
	Coordinates       *Coordinates   `json:"coordinates"`
	Country           *string        `json:"country"`
	CreatedAt         *string        `json:"created_at"`
	Currency          *string        `json:"currency"`
	Description       *string        `json:"description"`
	FacebookURL       *string        `json:"facebook_url"`
	FullFormatLogoURL *string        `json:"full_format_logo_url"`
	ID                *string        `json:"id"`
	InstagramUsername *string        `json:"instagram_username"`
	LanguageCode      *string        `json:"language_code"`
	LogoURL           *string        `json:"logo_url"`
	Mcc               *string        `json:"mcc"`
	MerchantID        *string        `json:"merchant_id"`
	Name              *string        `json:"name"`
	PhoneNumber       *string        `json:"phone_number"`
	PosBackgroundURL  *string        `json:"pos_background_url"`
	Status            *string        `json:"status"`
	TaxIds            *TaxIds        `json:"tax_ids"`
	Timezone          *string        `json:"timezone"`
	TwitterUsername   *string        `json:"twitter_username"`
	Type              *string        `json:"type"`
	WebsiteURL        *string        `json:"website_url"`
}
