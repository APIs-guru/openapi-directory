package operations

type PostClientRequestBody struct {
	AtID                    *string       `json:"@id,omitempty"`
	ClientID                string        `json:"client_id"`
	ClientName              *string       `json:"client_name,omitempty"`
	ClientSecret            *string       `json:"client_secret,omitempty"`
	ClientURI               *string       `json:"client_uri,omitempty"`
	Contacts                []interface{} `json:"contacts,omitempty"`
	GrantTypes              []interface{} `json:"grant_types,omitempty"`
	Jwks                    []interface{} `json:"jwks,omitempty"`
	JwksURI                 *string       `json:"jwks_uri,omitempty"`
	LogoEmail               *string       `json:"logo_email,omitempty"`
	LogoURI                 *string       `json:"logo_uri,omitempty"`
	PolicyURI               *string       `json:"policy_uri,omitempty"`
	RedirectUris            []interface{} `json:"redirect_uris,omitempty"`
	ResponseTypes           []interface{} `json:"response_types,omitempty"`
	Scope                   *string       `json:"scope,omitempty"`
	SoftwareID              *string       `json:"software_id,omitempty"`
	SoftwareVersion         *string       `json:"software_version,omitempty"`
	TokenEndpointAuthMethod *string       `json:"token_endpoint_auth_method,omitempty"`
	TosURI                  *string       `json:"tos_uri,omitempty"`
}

type PostClientRequest struct {
	Request *PostClientRequestBody `request:"mediaType=application/json"`
}

type PostClientResponse struct {
	ContentType string
	StatusCode  int64
}
