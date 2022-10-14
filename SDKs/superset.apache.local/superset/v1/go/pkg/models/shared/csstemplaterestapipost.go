package shared

type CSSTemplateRestAPIPost struct {
	CSS          *string `json:"css,omitempty"`
	TemplateName *string `json:"template_name,omitempty"`
}
