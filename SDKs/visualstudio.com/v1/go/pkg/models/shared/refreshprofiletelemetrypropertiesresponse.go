package shared

type RefreshProfileTelemetryPropertiesResponse struct {
	Failed    []ProfileSpecifier `json:"failed"`
	Succeeded []ProfileSpecifier `json:"succeeded"`
}
