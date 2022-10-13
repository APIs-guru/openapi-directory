package shared

type DatabaseRestAPIPut struct {
	AllowCsvUpload                *bool                  `json:"allow_csv_upload"`
	AllowCtas                     *bool                  `json:"allow_ctas"`
	AllowCvas                     *bool                  `json:"allow_cvas"`
	AllowDml                      *bool                  `json:"allow_dml"`
	AllowMultiSchemaMetadataFetch *bool                  `json:"allow_multi_schema_metadata_fetch"`
	AllowRunAsync                 *bool                  `json:"allow_run_async"`
	CacheTimeout                  *int32                 `json:"cache_timeout"`
	ConfigurationMethod           *interface{}           `json:"configuration_method"`
	DatabaseName                  *string                `json:"database_name"`
	EncryptedExtra                *string                `json:"encrypted_extra"`
	Engine                        *string                `json:"engine"`
	ExposeInSqllab                *bool                  `json:"expose_in_sqllab"`
	Extra                         *string                `json:"extra"`
	ForceCtasSchema               *string                `json:"force_ctas_schema"`
	ImpersonateUser               *bool                  `json:"impersonate_user"`
	Parameters                    map[string]interface{} `json:"parameters"`
	ServerCert                    *string                `json:"server_cert"`
	SqlalchemyURI                 *string                `json:"sqlalchemy_uri"`
}
