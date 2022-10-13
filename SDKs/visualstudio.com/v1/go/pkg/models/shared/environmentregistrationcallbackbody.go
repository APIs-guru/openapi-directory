package shared

type EnvironmentRegistrationCallbackBody struct {
	Payload *EnvironmentRegistrationCallbackPayloadBody `json:"payload"`
	Type    string                                      `json:"type"`
}
