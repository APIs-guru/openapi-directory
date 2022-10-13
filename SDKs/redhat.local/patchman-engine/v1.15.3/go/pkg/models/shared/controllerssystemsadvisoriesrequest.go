package shared

type ControllersSystemsAdvisoriesRequest struct {
	Advisories []string `json:"advisories"`
	Systems    []string `json:"systems"`
}
