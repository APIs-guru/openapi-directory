package shared



type Merchant struct {
    BusinessName *string `json:"business_name,omitempty"`
    Country string `json:"country"`
    Currency *string `json:"currency,omitempty"`
    ID *string `json:"id,omitempty"`
    LanguageCode *string `json:"language_code,omitempty"`
    MainLocationID *string `json:"main_location_id,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

