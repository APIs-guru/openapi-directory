package shared

type RenderResponse struct {
	Message  string             `json:"message"`
	Response RenderResponseData `json:"response"`
	Success  bool               `json:"success"`
}
