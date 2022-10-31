package shared

type DatabaseValidateParametersSchema struct {
	ConfigurationMethod interface{}            `json:"configuration_method"`
	DatabaseName        *string                `json:"database_name,omitempty"`
	EncryptedExtra      *string                `json:"encrypted_extra,omitempty"`
	Engine              string                 `json:"engine"`
	Extra               *string                `json:"extra,omitempty"`
	ImpersonateUser     *bool                  `json:"impersonate_user,omitempty"`
	Parameters          map[string]interface{} `json:"parameters,omitempty"`
	ServerCert          *string                `json:"server_cert,omitempty"`
}
