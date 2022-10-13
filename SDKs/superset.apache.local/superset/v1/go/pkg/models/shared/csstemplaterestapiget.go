package shared

type CSSTemplateRestAPIGet struct {
	CreatedBy    *Meta13 `json:"created_by"`
	CSS          *string `json:"css"`
	ID           *int32  `json:"id"`
	TemplateName *string `json:"template_name"`
}
