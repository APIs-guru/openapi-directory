package shared

// RenderResponse
// The response received after a [render status request](#get-render-status) is submitted. The response includes  details about status of a render and the output URL.
type RenderResponse struct {
	Message  string             `json:"message"`
	Response RenderResponseData `json:"response"`
	Success  bool               `json:"success"`
}
