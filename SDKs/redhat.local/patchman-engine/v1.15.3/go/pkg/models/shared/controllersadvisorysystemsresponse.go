package shared

type ControllersAdvisorySystemsResponse struct {
	Data  []ControllersSystemItem `json:"data"`
	Links *ControllersLinks       `json:"links"`
	Meta  *ControllersListMeta    `json:"meta"`
}
