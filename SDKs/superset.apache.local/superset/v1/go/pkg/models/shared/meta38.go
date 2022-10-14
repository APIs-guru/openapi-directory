package shared

type Meta38 struct {
	ID                  *int32  `json:"id,omitempty"`
	RecipientConfigJSON *string `json:"recipient_config_json,omitempty"`
	Type                string  `json:"type"`
}
