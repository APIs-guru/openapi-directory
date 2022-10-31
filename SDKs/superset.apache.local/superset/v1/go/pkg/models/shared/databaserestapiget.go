package shared



type DatabaseRestAPIGet struct {
    AllowCsvUpload *bool `json:"allow_csv_upload,omitempty"`
    AllowCtas *bool `json:"allow_ctas,omitempty"`
    AllowCvas *bool `json:"allow_cvas,omitempty"`
    AllowDml *bool `json:"allow_dml,omitempty"`
    AllowMultiSchemaMetadataFetch *bool `json:"allow_multi_schema_metadata_fetch,omitempty"`
    AllowRunAsync *bool `json:"allow_run_async,omitempty"`
    Backend *interface{} `json:"backend,omitempty"`
    CacheTimeout *int32 `json:"cache_timeout,omitempty"`
    ConfigurationMethod *string `json:"configuration_method,omitempty"`
    DatabaseName string `json:"database_name"`
    EncryptedExtra *string `json:"encrypted_extra,omitempty"`
    ExposeInSqllab *bool `json:"expose_in_sqllab,omitempty"`
    Extra *string `json:"extra,omitempty"`
    ForceCtasSchema *string `json:"force_ctas_schema,omitempty"`
    ID *int32 `json:"id,omitempty"`
    ImpersonateUser *bool `json:"impersonate_user,omitempty"`
    Parameters *interface{} `json:"parameters,omitempty"`
    ServerCert *string `json:"server_cert,omitempty"`
    SqlalchemyURI string `json:"sqlalchemy_uri"`
    
}

