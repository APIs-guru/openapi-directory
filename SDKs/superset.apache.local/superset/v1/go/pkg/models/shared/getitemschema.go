package shared

type GetItemSchemaKeysEnum string

const (
	GetItemSchemaKeysEnumShowColumns        GetItemSchemaKeysEnum = "show_columns"
	GetItemSchemaKeysEnumDescriptionColumns GetItemSchemaKeysEnum = "description_columns"
	GetItemSchemaKeysEnumLabelColumns       GetItemSchemaKeysEnum = "label_columns"
	GetItemSchemaKeysEnumShowTitle          GetItemSchemaKeysEnum = "show_title"
	GetItemSchemaKeysEnumNone               GetItemSchemaKeysEnum = "none"
)

type GetItemSchema struct {
	Columns []string                `json:"columns"`
	Keys    []GetItemSchemaKeysEnum `json:"keys"`
}
