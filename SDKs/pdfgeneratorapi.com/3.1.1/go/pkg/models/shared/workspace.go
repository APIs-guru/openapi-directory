package shared

type Workspace struct {
	CreatedAt         *string `json:"created_at,omitempty"`
	ID                *int64  `json:"id,omitempty"`
	Identifier        *string `json:"identifier,omitempty"`
	IsMasterWorkspace *bool   `json:"is_master_workspace,omitempty"`
}
