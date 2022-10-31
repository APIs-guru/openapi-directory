package shared

type RefreshProfileTelemetryPropertiesResponse struct {
	Failed    []ProfileSpecifier `json:"failed,omitempty"`
	Succeeded []ProfileSpecifier `json:"succeeded,omitempty"`
}
