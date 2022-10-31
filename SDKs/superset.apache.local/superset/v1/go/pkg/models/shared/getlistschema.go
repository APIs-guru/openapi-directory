package shared

type GetListSchemaFilters struct {
	Col   string      `json:"col"`
	Opr   string      `json:"opr"`
	Value interface{} `json:"value"`
}

type GetListSchemaKeysEnum string

const (
	GetListSchemaKeysEnumListColumns        GetListSchemaKeysEnum = "list_columns"
	GetListSchemaKeysEnumOrderColumns       GetListSchemaKeysEnum = "order_columns"
	GetListSchemaKeysEnumLabelColumns       GetListSchemaKeysEnum = "label_columns"
	GetListSchemaKeysEnumDescriptionColumns GetListSchemaKeysEnum = "description_columns"
	GetListSchemaKeysEnumListTitle          GetListSchemaKeysEnum = "list_title"
	GetListSchemaKeysEnumNone               GetListSchemaKeysEnum = "none"
)

type GetListSchemaOrderDirectionEnum string

const (
	GetListSchemaOrderDirectionEnumAsc  GetListSchemaOrderDirectionEnum = "asc"
	GetListSchemaOrderDirectionEnumDesc GetListSchemaOrderDirectionEnum = "desc"
)

type GetListSchema struct {
	Columns        []string                         `json:"columns,omitempty"`
	Filters        []GetListSchemaFilters           `json:"filters,omitempty"`
	Keys           []GetListSchemaKeysEnum          `json:"keys,omitempty"`
	OrderColumn    *string                          `json:"order_column,omitempty"`
	OrderDirection *GetListSchemaOrderDirectionEnum `json:"order_direction,omitempty"`
	Page           *int64                           `json:"page,omitempty"`
	PageSize       *int64                           `json:"page_size,omitempty"`
}
