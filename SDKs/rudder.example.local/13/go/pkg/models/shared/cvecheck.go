package shared

type CveCheckPackages struct {
	Name    *string `json:"name"`
	Version *string `json:"version"`
}

type CveCheck struct {
	CveID    *string            `json:"cveId"`
	Nodes    []string           `json:"nodes"`
	Packages []CveCheckPackages `json:"packages"`
}
