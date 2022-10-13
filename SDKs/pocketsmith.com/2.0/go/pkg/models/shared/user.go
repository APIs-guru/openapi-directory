package shared

type User struct {
	AlwaysShowBaseCurrency  *bool   `json:"always_show_base_currency"`
	AvatarURL               *string `json:"avatar_url"`
	BaseCurrencyCode        *string `json:"base_currency_code"`
	BetaUser                *bool   `json:"beta_user"`
	CreatedAt               *string `json:"created_at"`
	Email                   *string `json:"email"`
	ID                      *int64  `json:"id"`
	LastActivityAt          *string `json:"last_activity_at"`
	LastLoggedInAt          *string `json:"last_logged_in_at"`
	Login                   *string `json:"login"`
	Name                    *string `json:"name"`
	TimeZone                *string `json:"time_zone"`
	UpdatedAt               *string `json:"updated_at"`
	UsingMultipleCurrencies *bool   `json:"using_multiple_currencies"`
	WeekStartDay            *int64  `json:"week_start_day"`
}
