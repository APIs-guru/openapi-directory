package shared

type V3RunResponse struct {
	Run    *V3Run    `json:"run"`
	Status *V3Status `json:"status"`
}
