package shared



type User struct {
    AlwaysShowBaseCurrency *bool `json:"always_show_base_currency,omitempty"`
    AvatarURL *string `json:"avatar_url,omitempty"`
    BaseCurrencyCode *string `json:"base_currency_code,omitempty"`
    BetaUser *bool `json:"beta_user,omitempty"`
    CreatedAt *string `json:"created_at,omitempty"`
    Email *string `json:"email,omitempty"`
    ID *int64 `json:"id,omitempty"`
    LastActivityAt *string `json:"last_activity_at,omitempty"`
    LastLoggedInAt *string `json:"last_logged_in_at,omitempty"`
    Login *string `json:"login,omitempty"`
    Name *string `json:"name,omitempty"`
    TimeZone *string `json:"time_zone,omitempty"`
    UpdatedAt *string `json:"updated_at,omitempty"`
    UsingMultipleCurrencies *bool `json:"using_multiple_currencies,omitempty"`
    WeekStartDay *int64 `json:"week_start_day,omitempty"`
    
}

