package shared

// CveCheckPackages
// Packages affected by this CVE
type CveCheckPackages struct {
	Name    *string `json:"name,omitempty"`
	Version *string `json:"version,omitempty"`
}

type CveCheck struct {
	CveID    *string            `json:"cveId,omitempty"`
	Nodes    []string           `json:"nodes,omitempty"`
	Packages []CveCheckPackages `json:"packages,omitempty"`
}
