package shared

type EnvironmentRegistrationCallbackPayloadBody struct {
	SessionID   *string `json:"sessionId"`
	SessionPath *string `json:"sessionPath"`
}
