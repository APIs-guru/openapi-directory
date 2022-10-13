package shared

type TemplateTypeEnum string

const (
	TemplateTypeEnumSms TemplateTypeEnum = "SMS"
	TemplateTypeEnumWeb TemplateTypeEnum = "Web"
)

type Template struct {
	ID       *string           `json:"id"`
	Name     *string           `json:"name"`
	Template *string           `json:"template"`
	Type     *TemplateTypeEnum `json:"type"`
}
