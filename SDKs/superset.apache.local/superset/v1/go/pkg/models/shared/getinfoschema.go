package shared

type GetInfoSchemaAddColumns struct {
	Page     *int64 `json:"page"`
	PageSize *int64 `json:"page_size"`
}

type GetInfoSchemaEditColumns struct {
	Page     *int64 `json:"page"`
	PageSize *int64 `json:"page_size"`
}

type GetInfoSchemaKeysEnum string

const (
	GetInfoSchemaKeysEnumAddColumns  GetInfoSchemaKeysEnum = "add_columns"
	GetInfoSchemaKeysEnumEditColumns GetInfoSchemaKeysEnum = "edit_columns"
	GetInfoSchemaKeysEnumFilters     GetInfoSchemaKeysEnum = "filters"
	GetInfoSchemaKeysEnumPermissions GetInfoSchemaKeysEnum = "permissions"
	GetInfoSchemaKeysEnumAddTitle    GetInfoSchemaKeysEnum = "add_title"
	GetInfoSchemaKeysEnumEditTitle   GetInfoSchemaKeysEnum = "edit_title"
	GetInfoSchemaKeysEnumNone        GetInfoSchemaKeysEnum = "none"
)

type GetInfoSchema struct {
	AddColumns  map[string]GetInfoSchemaAddColumns  `json:"add_columns"`
	EditColumns map[string]GetInfoSchemaEditColumns `json:"edit_columns"`
	Keys        []GetInfoSchemaKeysEnum             `json:"keys"`
}
