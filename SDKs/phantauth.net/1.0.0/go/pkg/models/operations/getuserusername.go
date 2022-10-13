package operations

type GetUserUsernamePathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type GetUserUsernameRequest struct {
	PathParams GetUserUsernamePathParams
}

type GetUserUsername200ApplicationJSONAddress struct {
	Country       *string `json:"country"`
	Formatted     *string `json:"formatted"`
	Locality      *string `json:"locality"`
	PostalCode    *string `json:"postal_code"`
	Region        *string `json:"region"`
	StreetAddress *string `json:"street_address"`
}

type GetUserUsername200ApplicationJSON struct {
	AtID                *string                                   `json:"@id"`
	Address             *GetUserUsername200ApplicationJSONAddress `json:"address"`
	Birthdate           *string                                   `json:"birthdate"`
	Email               *string                                   `json:"email"`
	EmailVerified       *bool                                     `json:"email_verified"`
	FamilyName          *string                                   `json:"family_name"`
	Gender              *string                                   `json:"gender"`
	GivenName           *string                                   `json:"given_name"`
	Locale              *string                                   `json:"locale"`
	Me                  *string                                   `json:"me"`
	MiddleName          *string                                   `json:"middle_name"`
	Name                *string                                   `json:"name"`
	Nickname            *string                                   `json:"nickname"`
	Password            *string                                   `json:"password"`
	PhoneNumber         *string                                   `json:"phone_number"`
	PhoneNumberVerified *bool                                     `json:"phone_number_verified"`
	Picture             *string                                   `json:"picture"`
	PreferredUsername   *string                                   `json:"preferred_username"`
	Profile             *string                                   `json:"profile"`
	Sub                 string                                    `json:"sub"`
	UID                 *string                                   `json:"uid"`
	UpdatedAt           *float64                                  `json:"updated_at"`
	Webmail             *string                                   `json:"webmail"`
	Website             *string                                   `json:"website"`
	Zoneinfo            *string                                   `json:"zoneinfo"`
}

type GetUserUsernameResponse struct {
	ContentType                             string
	GetUserUsername200ApplicationJSONObject *GetUserUsername200ApplicationJSON
	StatusCode                              int64
}
