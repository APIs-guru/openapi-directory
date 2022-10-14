package shared

type ControllersAdvisorySystemsResponse struct {
	Data  []ControllersSystemItem `json:"data,omitempty"`
	Links *ControllersLinks       `json:"links,omitempty"`
	Meta  *ControllersListMeta    `json:"meta,omitempty"`
}
