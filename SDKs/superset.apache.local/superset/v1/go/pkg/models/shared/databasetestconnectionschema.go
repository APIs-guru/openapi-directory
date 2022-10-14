package shared

type DatabaseTestConnectionSchema struct {
	ConfigurationMethod *interface{}           `json:"configuration_method,omitempty"`
	DatabaseName        *string                `json:"database_name,omitempty"`
	EncryptedExtra      *string                `json:"encrypted_extra,omitempty"`
	Engine              *string                `json:"engine,omitempty"`
	Extra               *string                `json:"extra,omitempty"`
	ImpersonateUser     *bool                  `json:"impersonate_user,omitempty"`
	Parameters          map[string]interface{} `json:"parameters,omitempty"`
	ServerCert          *string                `json:"server_cert,omitempty"`
	SqlalchemyURI       *string                `json:"sqlalchemy_uri,omitempty"`
}
