package shared

type UserUserPermission struct {
	Permission []interface{} `json:"Permission,omitempty"`
}

type UserUserRoles struct {
	Role []string `json:"Role,omitempty"`
}

type UserUser struct {
	MetaData       map[string]interface{} `json:"MetaData,omitempty"`
	Permissions    *UserUserPermission    `json:"Permissions,omitempty"`
	Roles          *UserUserRoles         `json:"Roles,omitempty"`
	UserIdentifier *string                `json:"UserIdentifier,omitempty"`
}

type User struct {
	User *UserUser `json:"User,omitempty"`
}
