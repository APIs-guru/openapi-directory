package shared

type V3RunsResponse struct {
	Runs   []V3Run   `json:"runs"`
	Status *V3Status `json:"status"`
}
