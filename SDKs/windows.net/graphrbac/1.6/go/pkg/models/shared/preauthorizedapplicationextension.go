package shared

// PreAuthorizedApplicationExtension
// Representation of an app PreAuthorizedApplicationExtension required by a pre authorized client app.
type PreAuthorizedApplicationExtension struct {
	Conditions []string `json:"conditions,omitempty"`
}
