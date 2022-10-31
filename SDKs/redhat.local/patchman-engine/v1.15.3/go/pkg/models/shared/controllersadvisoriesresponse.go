package shared

type ControllersAdvisoriesResponse struct {
	Data  []ControllersAdvisoryItem `json:"data,omitempty"`
	Links *ControllersLinks         `json:"links,omitempty"`
	Meta  *ControllersListMeta      `json:"meta,omitempty"`
}
