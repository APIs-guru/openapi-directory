package shared

type VerifyV2Form struct {
	FormMeta *interface{}           `json:"form_meta,omitempty"`
	FormType *FormEnumFormTypesEnum `json:"form_type,omitempty"`
	Forms    *interface{}           `json:"forms,omitempty"`
	URL      *string                `json:"url,omitempty"`
}
