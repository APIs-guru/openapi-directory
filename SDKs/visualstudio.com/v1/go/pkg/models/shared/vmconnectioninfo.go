package shared



type VMConnectionInfo struct {
    ConnectionType *int32 `json:"connectionType,omitempty"`
    LiveShareWorkspaceID *string `json:"liveShareWorkspaceId,omitempty"`
    
}

