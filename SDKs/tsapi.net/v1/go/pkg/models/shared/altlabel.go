package shared

type AltLabel struct {
	LangIdent *string `json:"langIdent"`
	Mode      *int32  `json:"mode"`
	Text      *string `json:"text"`
}
