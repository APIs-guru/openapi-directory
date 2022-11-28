package operations

type PostSecurityLoginRequestBodyProviderEnum string

const (
	PostSecurityLoginRequestBodyProviderEnumDb   PostSecurityLoginRequestBodyProviderEnum = "db"
	PostSecurityLoginRequestBodyProviderEnumLdap PostSecurityLoginRequestBodyProviderEnum = "ldap"
)

type PostSecurityLoginRequestBody struct {
	Password *string                                   `json:"password,omitempty"`
	Provider *PostSecurityLoginRequestBodyProviderEnum `json:"provider,omitempty"`
	Refresh  *bool                                     `json:"refresh,omitempty"`
	Username *string                                   `json:"username,omitempty"`
}

type PostSecurityLogin200ApplicationJSON struct {
	AccessToken  *string `json:"access_token,omitempty"`
	RefreshToken *string `json:"refresh_token,omitempty"`
}

type PostSecurityLogin400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostSecurityLogin401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostSecurityLogin500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostSecurityLoginRequest struct {
	Request PostSecurityLoginRequestBody `request:"mediaType=application/json"`
}

type PostSecurityLoginResponse struct {
	ContentType                               string
	PostSecurityLogin200ApplicationJSONObject *PostSecurityLogin200ApplicationJSON
	PostSecurityLogin400ApplicationJSONObject *PostSecurityLogin400ApplicationJSON
	PostSecurityLogin401ApplicationJSONObject *PostSecurityLogin401ApplicationJSON
	PostSecurityLogin500ApplicationJSONObject *PostSecurityLogin500ApplicationJSON
	StatusCode                                int64
}
