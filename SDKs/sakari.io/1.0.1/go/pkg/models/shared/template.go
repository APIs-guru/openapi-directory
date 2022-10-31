package shared

type TemplateTypeEnum string

const (
	TemplateTypeEnumSms TemplateTypeEnum = "SMS"
	TemplateTypeEnumWeb TemplateTypeEnum = "Web"
)

type Template struct {
	ID       *string           `json:"id,omitempty"`
	Name     *string           `json:"name,omitempty"`
	Template *string           `json:"template,omitempty"`
	Type     *TemplateTypeEnum `json:"type,omitempty"`
}
