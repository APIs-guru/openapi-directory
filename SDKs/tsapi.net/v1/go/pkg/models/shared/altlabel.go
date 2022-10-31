package shared

type AltLabel struct {
	LangIdent *string `json:"langIdent,omitempty"`
	Mode      *int32  `json:"mode,omitempty"`
	Text      *string `json:"text,omitempty"`
}
