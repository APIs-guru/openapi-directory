package shared

type HookOutput struct {
	Hooks      []Hook  `json:"hooks"`
	Next       *string `json:"next"`
	Self       *string `json:"self"`
	SigningKey *string `json:"signing_key"`
}
