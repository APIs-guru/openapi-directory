package shared

type ControllersPackageVersionsResponse struct {
	Data  []ControllersPackageVersionItem `json:"data,omitempty"`
	Links *ControllersLinks               `json:"links,omitempty"`
	Meta  *ControllersListMeta            `json:"meta,omitempty"`
}
