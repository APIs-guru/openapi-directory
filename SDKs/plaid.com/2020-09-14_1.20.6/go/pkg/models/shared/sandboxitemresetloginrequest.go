package shared



type SandboxItemResetLoginRequest struct {
    AccessToken string `json:"access_token"`
    ClientID *string `json:"client_id,omitempty"`
    Secret *string `json:"secret,omitempty"`
    
}

