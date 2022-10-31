package shared



type EnvironmentRegistrationCallbackBody struct {
    Payload *EnvironmentRegistrationCallbackPayloadBody `json:"payload,omitempty"`
    Type string `json:"type"`
    
}

