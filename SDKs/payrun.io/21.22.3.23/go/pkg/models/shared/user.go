package shared

type UserUserPermissionsPermission struct {
	Permission []interface{} `json:"Permission,omitempty"`
}

type UserUserRolesRoles struct {
	Role []string `json:"Role,omitempty"`
}

type UserUserUser struct {
	MetaData       map[string]interface{}         `json:"MetaData,omitempty"`
	Permissions    *UserUserPermissionsPermission `json:"Permissions,omitempty"`
	Roles          *UserUserRolesRoles            `json:"Roles,omitempty"`
	UserIdentifier *string                        `json:"UserIdentifier,omitempty"`
}

type User struct {
	User *UserUserUser `json:"User,omitempty"`
}
