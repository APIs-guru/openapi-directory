package shared

import (
	"time"
)

type Meta22 struct {
	ChangedOn        *time.Time   `json:"changed_on"`
	ColumnName       string       `json:"column_name"`
	CreatedOn        *time.Time   `json:"created_on"`
	Description      *string      `json:"description"`
	Expression       *string      `json:"expression"`
	Filterable       *bool        `json:"filterable"`
	Groupby          *bool        `json:"groupby"`
	ID               *int32       `json:"id"`
	IsActive         *bool        `json:"is_active"`
	IsDttm           *bool        `json:"is_dttm"`
	PythonDateFormat *string      `json:"python_date_format"`
	Type             *string      `json:"type"`
	TypeGeneric      *interface{} `json:"type_generic"`
	UUID             *string      `json:"uuid"`
	VerboseName      *string      `json:"verbose_name"`
}
