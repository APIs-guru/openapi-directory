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
	Description *string                               `json:"Description"`
	Expression  *string                               `json:"Expression"`
	Name        *string                               `json:"Name"`
	Policy      *PermissionPermissionPolicyPolicyEnum `json:"Policy"`
	Verbs       *PermissionPermissionVerbsVerbsEnum   `json:"Verbs"`
}

type Permission struct {
	Permission *PermissionPermissionPermission `json:"Permission"`
}
