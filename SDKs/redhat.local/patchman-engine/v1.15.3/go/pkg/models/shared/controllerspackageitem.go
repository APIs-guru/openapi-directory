package shared

type ControllersPackageItem struct {
	Name             *string `json:"name"`
	Summary          *string `json:"summary"`
	SystemsInstalled *int64  `json:"systems_installed"`
	SystemsUpdatable *int64  `json:"systems_updatable"`
}
