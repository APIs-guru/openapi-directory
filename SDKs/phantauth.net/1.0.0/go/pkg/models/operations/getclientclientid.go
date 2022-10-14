package operations

type GetClientClientIDPathParams struct {
	ClientID string `pathParam:"style=simple,explode=false,name=client_id"`
}

type GetClientClientIDRequest struct {
	PathParams GetClientClientIDPathParams
}

type GetClientClientID200ApplicationJSON struct {
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

type GetClientClientIDResponse struct {
	ContentType                               string
	GetClientClientID200ApplicationJSONObject *GetClientClientID200ApplicationJSON
	StatusCode                                int64
}
