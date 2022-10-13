package shared

type ControllersSystemPackageResponse struct {
	Data  []ControllersSystemPackageData `json:"data"`
	Links *ControllersLinks              `json:"links"`
	Meta  *ControllersListMeta           `json:"meta"`
}
