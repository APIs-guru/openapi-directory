package operations

type GetUserUsernamePathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

// GetUserUsername200ApplicationJSONAddress
// The user's preferred postal address.
type GetUserUsername200ApplicationJSONAddress struct {
	Country       *string `json:"country,omitempty"`
	Formatted     *string `json:"formatted,omitempty"`
	Locality      *string `json:"locality,omitempty"`
	PostalCode    *string `json:"postal_code,omitempty"`
	Region        *string `json:"region,omitempty"`
	StreetAddress *string `json:"street_address,omitempty"`
}

type GetUserUsername200ApplicationJSON struct {
	AtID                *string                                   `json:"@id,omitempty"`
	Address             *GetUserUsername200ApplicationJSONAddress `json:"address,omitempty"`
	Birthdate           *string                                   `json:"birthdate,omitempty"`
	Email               *string                                   `json:"email,omitempty"`
	EmailVerified       *bool                                     `json:"email_verified,omitempty"`
	FamilyName          *string                                   `json:"family_name,omitempty"`
	Gender              *string                                   `json:"gender,omitempty"`
	GivenName           *string                                   `json:"given_name,omitempty"`
	Locale              *string                                   `json:"locale,omitempty"`
	Me                  *string                                   `json:"me,omitempty"`
	MiddleName          *string                                   `json:"middle_name,omitempty"`
	Name                *string                                   `json:"name,omitempty"`
	Nickname            *string                                   `json:"nickname,omitempty"`
	Password            *string                                   `json:"password,omitempty"`
	PhoneNumber         *string                                   `json:"phone_number,omitempty"`
	PhoneNumberVerified *bool                                     `json:"phone_number_verified,omitempty"`
	Picture             *string                                   `json:"picture,omitempty"`
	PreferredUsername   *string                                   `json:"preferred_username,omitempty"`
	Profile             *string                                   `json:"profile,omitempty"`
	Sub                 string                                    `json:"sub"`
	UID                 *string                                   `json:"uid,omitempty"`
	UpdatedAt           *float64                                  `json:"updated_at,omitempty"`
	Webmail             *string                                   `json:"webmail,omitempty"`
	Website             *string                                   `json:"website,omitempty"`
	Zoneinfo            *string                                   `json:"zoneinfo,omitempty"`
}

type GetUserUsernameRequest struct {
	PathParams GetUserUsernamePathParams
}

type GetUserUsernameResponse struct {
	ContentType                             string
	GetUserUsername200ApplicationJSONObject *GetUserUsername200ApplicationJSON
	StatusCode                              int64
}
