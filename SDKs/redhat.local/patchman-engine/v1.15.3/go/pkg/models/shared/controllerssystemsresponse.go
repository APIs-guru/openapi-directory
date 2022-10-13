package shared

type ControllersSystemsResponse struct {
	Data  []ControllersSystemItem `json:"data"`
	Links *ControllersLinks       `json:"links"`
	Meta  *ControllersListMeta    `json:"meta"`
}
