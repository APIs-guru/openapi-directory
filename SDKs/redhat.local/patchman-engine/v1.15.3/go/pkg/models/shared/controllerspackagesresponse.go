package shared

type ControllersPackagesResponse struct {
	Data  []ControllersPackageItem `json:"data"`
	Links *ControllersLinks        `json:"links"`
	Meta  *ControllersListMeta     `json:"meta"`
}
