package operations

type PostSecurityLoginRequestBodyProviderEnum string

const (
	PostSecurityLoginRequestBodyProviderEnumDb   PostSecurityLoginRequestBodyProviderEnum = "db"
	PostSecurityLoginRequestBodyProviderEnumLdap PostSecurityLoginRequestBodyProviderEnum = "ldap"
)

type PostSecurityLoginRequestBody struct {
	Password *string                                   `json:"password"`
	Provider *PostSecurityLoginRequestBodyProviderEnum `json:"provider"`
	Refresh  *bool                                     `json:"refresh"`
	Username *string                                   `json:"username"`
}

type PostSecurityLoginRequest struct {
	Request PostSecurityLoginRequestBody `request:"mediaType=application/json"`
}

type PostSecurityLogin200ApplicationJSON struct {
	AccessToken  *string `json:"access_token"`
	RefreshToken *string `json:"refresh_token"`
}

type PostSecurityLogin400ApplicationJSON struct {
	Message *string `json:"message"`
}

type PostSecurityLogin401ApplicationJSON struct {
	Message *string `json:"message"`
}

type PostSecurityLogin500ApplicationJSON struct {
	Message *string `json:"message"`
}

type PostSecurityLoginResponse struct {
	ContentType                               string
	PostSecurityLogin200ApplicationJSONObject *PostSecurityLogin200ApplicationJSON
	PostSecurityLogin400ApplicationJSONObject *PostSecurityLogin400ApplicationJSON
	PostSecurityLogin401ApplicationJSONObject *PostSecurityLogin401ApplicationJSON
	PostSecurityLogin500ApplicationJSONObject *PostSecurityLogin500ApplicationJSON
	StatusCode                                int64
}
