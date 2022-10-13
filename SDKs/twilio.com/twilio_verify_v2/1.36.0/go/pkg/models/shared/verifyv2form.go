package shared

type VerifyV2Form struct {
	FormMeta *interface{}           `json:"form_meta"`
	FormType *FormEnumFormTypesEnum `json:"form_type"`
	Forms    *interface{}           `json:"forms"`
	URL      *string                `json:"url"`
}
