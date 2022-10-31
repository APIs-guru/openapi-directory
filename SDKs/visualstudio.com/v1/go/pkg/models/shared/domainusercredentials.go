package shared

type DomainUserCredentials struct {
	Domain                   string  `json:"domain"`
	OrganizationalUnit       *string `json:"organizationalUnit,omitempty"`
	PasswordSecretIdentifier string  `json:"passwordSecretIdentifier"`
	UserName                 string  `json:"userName"`
}
