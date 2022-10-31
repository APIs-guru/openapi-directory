package shared

type GetInfoSchemaAddColumns struct {
	Page     *int64 `json:"page,omitempty"`
	PageSize *int64 `json:"page_size,omitempty"`
}

type GetInfoSchemaEditColumns struct {
	Page     *int64 `json:"page,omitempty"`
	PageSize *int64 `json:"page_size,omitempty"`
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
	AddColumns  map[string]GetInfoSchemaAddColumns  `json:"add_columns,omitempty"`
	EditColumns map[string]GetInfoSchemaEditColumns `json:"edit_columns,omitempty"`
	Keys        []GetInfoSchemaKeysEnum             `json:"keys,omitempty"`
}
