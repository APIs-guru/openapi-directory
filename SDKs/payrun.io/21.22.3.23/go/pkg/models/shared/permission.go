package shared




type PermissionPermissionPolicyEnum string

const (
    PermissionPermissionPolicyEnumAllow PermissionPermissionPolicyEnum = "Allow"
PermissionPermissionPolicyEnumDeny PermissionPermissionPolicyEnum = "Deny"
)



type PermissionPermissionVerbsEnum string

const (
    PermissionPermissionVerbsEnumRead PermissionPermissionVerbsEnum = "Read"
PermissionPermissionVerbsEnumWrite PermissionPermissionVerbsEnum = "Write"
PermissionPermissionVerbsEnumDelete PermissionPermissionVerbsEnum = "Delete"
PermissionPermissionVerbsEnumAll PermissionPermissionVerbsEnum = "All"
)


type PermissionPermission struct {
    Description *string `json:"Description,omitempty"`
    Expression *string `json:"Expression,omitempty"`
    Name *string `json:"Name,omitempty"`
    Policy *PermissionPermissionPolicyEnum `json:"Policy,omitempty"`
    Verbs *PermissionPermissionVerbsEnum `json:"Verbs,omitempty"`
    
}

type Permission struct {
    Permission *PermissionPermission `json:"Permission,omitempty"`
    
}

