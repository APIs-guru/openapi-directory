package shared

type DatabaseRestAPIPut struct {
	AllowCsvUpload                *bool                  `json:"allow_csv_upload,omitempty"`
	AllowCtas                     *bool                  `json:"allow_ctas,omitempty"`
	AllowCvas                     *bool                  `json:"allow_cvas,omitempty"`
	AllowDml                      *bool                  `json:"allow_dml,omitempty"`
	AllowMultiSchemaMetadataFetch *bool                  `json:"allow_multi_schema_metadata_fetch,omitempty"`
	AllowRunAsync                 *bool                  `json:"allow_run_async,omitempty"`
	CacheTimeout                  *int32                 `json:"cache_timeout,omitempty"`
	ConfigurationMethod           *interface{}           `json:"configuration_method,omitempty"`
	DatabaseName                  *string                `json:"database_name,omitempty"`
	EncryptedExtra                *string                `json:"encrypted_extra,omitempty"`
	Engine                        *string                `json:"engine,omitempty"`
	ExposeInSqllab                *bool                  `json:"expose_in_sqllab,omitempty"`
	Extra                         *string                `json:"extra,omitempty"`
	ForceCtasSchema               *string                `json:"force_ctas_schema,omitempty"`
	ImpersonateUser               *bool                  `json:"impersonate_user,omitempty"`
	Parameters                    map[string]interface{} `json:"parameters,omitempty"`
	ServerCert                    *string                `json:"server_cert,omitempty"`
	SqlalchemyURI                 *string                `json:"sqlalchemy_uri,omitempty"`
}
