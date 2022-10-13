package shared

type ControllersPackageSystemsResponse struct {
	Data  []ControllersPackageSystemItem `json:"data"`
	Links *ControllersLinks              `json:"links"`
	Meta  *ControllersListMeta           `json:"meta"`
}
