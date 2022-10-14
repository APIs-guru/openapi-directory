package shared

type ControllersSystemsAdvisoriesRequest struct {
	Advisories []string `json:"advisories,omitempty"`
	Systems    []string `json:"systems,omitempty"`
}
