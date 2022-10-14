package shared

type TemplateRequestTypeEnum string

const (
	TemplateRequestTypeEnumSms TemplateRequestTypeEnum = "SMS"
	TemplateRequestTypeEnumWeb TemplateRequestTypeEnum = "Web"
)

type TemplateRequest struct {
	Name     *string                  `json:"name,omitempty"`
	Template *string                  `json:"template,omitempty"`
	Type     *TemplateRequestTypeEnum `json:"type,omitempty"`
}
