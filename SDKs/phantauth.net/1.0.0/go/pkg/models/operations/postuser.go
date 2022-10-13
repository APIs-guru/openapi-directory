package operations

type PostUserRequestBodyAddress struct {
	Country       *string `json:"country"`
	Formatted     *string `json:"formatted"`
	Locality      *string `json:"locality"`
	PostalCode    *string `json:"postal_code"`
	Region        *string `json:"region"`
	StreetAddress *string `json:"street_address"`
}

type PostUserRequestBody struct {
	AtID                *string                     `json:"@id"`
	Address             *PostUserRequestBodyAddress `json:"address"`
	Birthdate           *string                     `json:"birthdate"`
	Email               *string                     `json:"email"`
	EmailVerified       *bool                       `json:"email_verified"`
	FamilyName          *string                     `json:"family_name"`
	Gender              *string                     `json:"gender"`
	GivenName           *string                     `json:"given_name"`
	Locale              *string                     `json:"locale"`
	Me                  *string                     `json:"me"`
	MiddleName          *string                     `json:"middle_name"`
	Name                *string                     `json:"name"`
	Nickname            *string                     `json:"nickname"`
	Password            *string                     `json:"password"`
	PhoneNumber         *string                     `json:"phone_number"`
	PhoneNumberVerified *bool                       `json:"phone_number_verified"`
	Picture             *string                     `json:"picture"`
	PreferredUsername   *string                     `json:"preferred_username"`
	Profile             *string                     `json:"profile"`
	Sub                 string                      `json:"sub"`
	UID                 *string                     `json:"uid"`
	UpdatedAt           *float64                    `json:"updated_at"`
	Webmail             *string                     `json:"webmail"`
	Website             *string                     `json:"website"`
	Zoneinfo            *string                     `json:"zoneinfo"`
}

type PostUserRequest struct {
	Request *PostUserRequestBody `request:"mediaType=application/json"`
}

type PostUserResponse struct {
	ContentType string
	StatusCode  int64
}
