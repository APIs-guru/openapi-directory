package shared

import (
"time")

type Meta22 struct {
    ChangedOn *time.Time `json:"changed_on,omitempty"`
    ColumnName string `json:"column_name"`
    CreatedOn *time.Time `json:"created_on,omitempty"`
    Description *string `json:"description,omitempty"`
    Expression *string `json:"expression,omitempty"`
    Filterable *bool `json:"filterable,omitempty"`
    Groupby *bool `json:"groupby,omitempty"`
    ID *int32 `json:"id,omitempty"`
    IsActive *bool `json:"is_active,omitempty"`
    IsDttm *bool `json:"is_dttm,omitempty"`
    PythonDateFormat *string `json:"python_date_format,omitempty"`
    Type *string `json:"type,omitempty"`
    TypeGeneric *interface{} `json:"type_generic,omitempty"`
    UUID *string `json:"uuid,omitempty"`
    VerboseName *string `json:"verbose_name,omitempty"`
    
}

