package shared



type CreateEnvironmentPoolResourceBody struct {
    EnvironmentOptions *PrebuildEnvironmentOptions `json:"environmentOptions,omitempty"`
    Secrets []SecretDataBody `json:"secrets,omitempty"`
    
}

