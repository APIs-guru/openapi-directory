package shared

type CreateEnvironmentPoolResourceBody struct {
	EnvironmentOptions *PrebuildEnvironmentOptions `json:"environmentOptions"`
	Secrets            []SecretDataBody            `json:"secrets"`
}
