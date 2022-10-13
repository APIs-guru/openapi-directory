package shared

type DatasetColumnsPut struct {
	ColumnName       string  `json:"column_name"`
	Description      *string `json:"description"`
	Expression       *string `json:"expression"`
	Filterable       *bool   `json:"filterable"`
	Groupby          *bool   `json:"groupby"`
	ID               *int32  `json:"id"`
	IsActive         *bool   `json:"is_active"`
	IsDttm           *bool   `json:"is_dttm"`
	PythonDateFormat *string `json:"python_date_format"`
	Type             *string `json:"type"`
	UUID             *string `json:"uuid"`
	VerboseName      *string `json:"verbose_name"`
}
