package shared

type EntryThumbForAPIContract struct {
	Mime          *string `json:"mime"`
	URLOriginal   *string `json:"urlOriginal"`
	URLSmallThumb *string `json:"urlSmallThumb"`
	URLThumb      *string `json:"urlThumb"`
	URLTinyThumb  *string `json:"urlTinyThumb"`
}
