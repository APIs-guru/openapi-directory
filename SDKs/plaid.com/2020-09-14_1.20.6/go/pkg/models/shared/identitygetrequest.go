package shared



type IdentityGetRequest struct {
    AccessToken string `json:"access_token"`
    ClientID *string `json:"client_id,omitempty"`
    Options *IdentityGetRequestOptions `json:"options,omitempty"`
    Secret *string `json:"secret,omitempty"`
    
}

