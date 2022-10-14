package shared

type PermissionPermissionPolicyPolicyEnum string

const (
	PermissionPermissionPolicyPolicyEnumAllow PermissionPermissionPolicyPolicyEnum = "Allow"
	PermissionPermissionPolicyPolicyEnumDeny  PermissionPermissionPolicyPolicyEnum = "Deny"
)

type PermissionPermissionVerbsVerbsEnum string

const (
	PermissionPermissionVerbsVerbsEnumRead   PermissionPermissionVerbsVerbsEnum = "Read"
	PermissionPermissionVerbsVerbsEnumWrite  PermissionPermissionVerbsVerbsEnum = "Write"
	PermissionPermissionVerbsVerbsEnumDelete PermissionPermissionVerbsVerbsEnum = "Delete"
	PermissionPermissionVerbsVerbsEnumAll    PermissionPermissionVerbsVerbsEnum = "All"
)

type PermissionPermissionPermission struct {
	Description *string                               `json:"Description,omitempty"`
	Expression  *string                               `json:"Expression,omitempty"`
	Name        *string                               `json:"Name,omitempty"`
	Policy      *PermissionPermissionPolicyPolicyEnum `json:"Policy,omitempty"`
	Verbs       *PermissionPermissionVerbsVerbsEnum   `json:"Verbs,omitempty"`
}

type Permission struct {
	Permission *PermissionPermissionPermission `json:"Permission,omitempty"`
}
