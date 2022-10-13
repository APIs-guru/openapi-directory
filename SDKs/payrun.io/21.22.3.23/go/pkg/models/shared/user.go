package shared

type UserUserPermissionsPermission struct {
	Permission []interface{} `json:"Permission"`
}

type UserUserRolesRoles struct {
	Role []string `json:"Role"`
}

type UserUserUser struct {
	MetaData       map[string]interface{}         `json:"MetaData"`
	Permissions    *UserUserPermissionsPermission `json:"Permissions"`
	Roles          *UserUserRolesRoles            `json:"Roles"`
	UserIdentifier *string                        `json:"UserIdentifier"`
}

type User struct {
	User *UserUserUser `json:"User"`
}
