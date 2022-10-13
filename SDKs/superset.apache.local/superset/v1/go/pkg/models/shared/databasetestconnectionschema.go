package shared

type DatabaseTestConnectionSchema struct {
	ConfigurationMethod *interface{}           `json:"configuration_method"`
	DatabaseName        *string                `json:"database_name"`
	EncryptedExtra      *string                `json:"encrypted_extra"`
	Engine              *string                `json:"engine"`
	Extra               *string                `json:"extra"`
	ImpersonateUser     *bool                  `json:"impersonate_user"`
	Parameters          map[string]interface{} `json:"parameters"`
	ServerCert          *string                `json:"server_cert"`
	SqlalchemyURI       *string                `json:"sqlalchemy_uri"`
}
