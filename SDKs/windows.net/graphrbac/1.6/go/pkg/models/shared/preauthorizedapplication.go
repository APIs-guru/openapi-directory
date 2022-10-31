package shared



type PreAuthorizedApplication struct {
    AppID *string `json:"appId,omitempty"`
    Extensions []PreAuthorizedApplicationExtension `json:"extensions,omitempty"`
    Permissions []PreAuthorizedApplicationPermission `json:"permissions,omitempty"`
    
}

