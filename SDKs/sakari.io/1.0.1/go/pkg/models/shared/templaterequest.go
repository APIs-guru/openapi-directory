package shared

type TemplateRequestTypeEnum string

const (
	TemplateRequestTypeEnumSms TemplateRequestTypeEnum = "SMS"
	TemplateRequestTypeEnumWeb TemplateRequestTypeEnum = "Web"
)

type TemplateRequest struct {
	Name     *string                  `json:"name"`
	Template *string                  `json:"template"`
	Type     *TemplateRequestTypeEnum `json:"type"`
}
