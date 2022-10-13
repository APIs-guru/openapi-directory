package shared

type ControllersPackageVersionsResponse struct {
	Data  []ControllersPackageVersionItem `json:"data"`
	Links *ControllersLinks               `json:"links"`
	Meta  *ControllersListMeta            `json:"meta"`
}
