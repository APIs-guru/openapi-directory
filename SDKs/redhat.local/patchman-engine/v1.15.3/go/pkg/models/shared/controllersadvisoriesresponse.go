package shared

type ControllersAdvisoriesResponse struct {
	Data  []ControllersAdvisoryItem `json:"data"`
	Links *ControllersLinks         `json:"links"`
	Meta  *ControllersListMeta      `json:"meta"`
}
