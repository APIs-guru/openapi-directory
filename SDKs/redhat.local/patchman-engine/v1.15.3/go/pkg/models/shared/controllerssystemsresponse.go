package shared

type ControllersSystemsResponse struct {
	Data  []ControllersSystemItem `json:"data,omitempty"`
	Links *ControllersLinks       `json:"links,omitempty"`
	Meta  *ControllersListMeta    `json:"meta,omitempty"`
}
