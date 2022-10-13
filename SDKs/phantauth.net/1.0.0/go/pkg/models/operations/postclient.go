package operations

type PostClientRequestBody struct {
	AtID                    *string       `json:"@id"`
	ClientID                string        `json:"client_id"`
	ClientName              *string       `json:"client_name"`
	ClientSecret            *string       `json:"client_secret"`
	ClientURI               *string       `json:"client_uri"`
	Contacts                []interface{} `json:"contacts"`
	GrantTypes              []interface{} `json:"grant_types"`
	Jwks                    []interface{} `json:"jwks"`
	JwksURI                 *string       `json:"jwks_uri"`
	LogoEmail               *string       `json:"logo_email"`
	LogoURI                 *string       `json:"logo_uri"`
	PolicyURI               *string       `json:"policy_uri"`
	RedirectUris            []interface{} `json:"redirect_uris"`
	ResponseTypes           []interface{} `json:"response_types"`
	Scope                   *string       `json:"scope"`
	SoftwareID              *string       `json:"software_id"`
	SoftwareVersion         *string       `json:"software_version"`
	TokenEndpointAuthMethod *string       `json:"token_endpoint_auth_method"`
	TosURI                  *string       `json:"tos_uri"`
}

type PostClientRequest struct {
	Request *PostClientRequestBody `request:"mediaType=application/json"`
}

type PostClientResponse struct {
	ContentType string
	StatusCode  int64
}
