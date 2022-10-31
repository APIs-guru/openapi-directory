package shared



type Location struct {
    Address *Address `json:"address,omitempty"`
    BusinessEmail *string `json:"business_email,omitempty"`
    BusinessHours *BusinessHours `json:"business_hours,omitempty"`
    BusinessName *string `json:"business_name,omitempty"`
    Capabilities []string `json:"capabilities,omitempty"`
    Coordinates *Coordinates `json:"coordinates,omitempty"`
    Country *string `json:"country,omitempty"`
    CreatedAt *string `json:"created_at,omitempty"`
    Currency *string `json:"currency,omitempty"`
    Description *string `json:"description,omitempty"`
    FacebookURL *string `json:"facebook_url,omitempty"`
    FullFormatLogoURL *string `json:"full_format_logo_url,omitempty"`
    ID *string `json:"id,omitempty"`
    InstagramUsername *string `json:"instagram_username,omitempty"`
    LanguageCode *string `json:"language_code,omitempty"`
    LogoURL *string `json:"logo_url,omitempty"`
    Mcc *string `json:"mcc,omitempty"`
    MerchantID *string `json:"merchant_id,omitempty"`
    Name *string `json:"name,omitempty"`
    PhoneNumber *string `json:"phone_number,omitempty"`
    PosBackgroundURL *string `json:"pos_background_url,omitempty"`
    Status *string `json:"status,omitempty"`
    TaxIds *TaxIds `json:"tax_ids,omitempty"`
    Timezone *string `json:"timezone,omitempty"`
    TwitterUsername *string `json:"twitter_username,omitempty"`
    Type *string `json:"type,omitempty"`
    WebsiteURL *string `json:"website_url,omitempty"`
    
}

