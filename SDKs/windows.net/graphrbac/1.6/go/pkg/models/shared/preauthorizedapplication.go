package shared

type PreAuthorizedApplication struct {
	AppID       *string                              `json:"appId"`
	Extensions  []PreAuthorizedApplicationExtension  `json:"extensions"`
	Permissions []PreAuthorizedApplicationPermission `json:"permissions"`
}
