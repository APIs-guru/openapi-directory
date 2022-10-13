package shared

type ControllersSystemAdvisoriesResponse struct {
	Data  []ControllersSystemAdvisoryItem `json:"data"`
	Links *ControllersLinks               `json:"links"`
	Meta  *ControllersListMeta            `json:"meta"`
}
