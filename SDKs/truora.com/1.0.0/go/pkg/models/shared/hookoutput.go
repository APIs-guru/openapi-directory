package shared



type HookOutput struct {
    Hooks []Hook `json:"hooks,omitempty"`
    Next *string `json:"next,omitempty"`
    Self *string `json:"self,omitempty"`
    SigningKey *string `json:"signing_key,omitempty"`
    
}

