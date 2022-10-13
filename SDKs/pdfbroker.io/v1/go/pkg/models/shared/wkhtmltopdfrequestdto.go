package shared

type WkHTMLToPdfRequestDto struct {
	HTMLBase64String     *string           `json:"HtmlBase64String"`
	Resources            map[string]string `json:"Resources"`
	URL                  *string           `json:"Url"`
	WkHTMLToPdfArguments map[string]string `json:"WkHtmlToPdfArguments"`
}
