package shared



type WkHTMLToPdfRequestDto struct {
    HTMLBase64String *string `json:"HtmlBase64String,omitempty"`
    Resources map[string]string `json:"Resources,omitempty"`
    URL *string `json:"Url,omitempty"`
    WkHTMLToPdfArguments map[string]string `json:"WkHtmlToPdfArguments,omitempty"`
    
}

