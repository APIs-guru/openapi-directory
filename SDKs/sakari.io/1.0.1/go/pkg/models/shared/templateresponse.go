package shared

type TemplateResponse struct {
	Data    *Template `json:"data"`
	Success *bool     `json:"success"`
}
