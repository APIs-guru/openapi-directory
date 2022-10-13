package shared

type VMConnectionInfo struct {
	ConnectionType       *int32  `json:"connectionType"`
	LiveShareWorkspaceID *string `json:"liveShareWorkspaceId"`
}
