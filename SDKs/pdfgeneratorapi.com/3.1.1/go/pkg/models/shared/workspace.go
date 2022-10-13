package shared

type Workspace struct {
	CreatedAt         *string `json:"created_at"`
	ID                *int64  `json:"id"`
	Identifier        *string `json:"identifier"`
	IsMasterWorkspace *bool   `json:"is_master_workspace"`
}
