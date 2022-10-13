package shared

type CredentialTypeEnum string

const (
	CredentialTypeEnumMiradoreAPIKeyV1 CredentialTypeEnum = "miradore_api_key_v1"
	CredentialTypeEnumAwsAccessSecret  CredentialTypeEnum = "aws_access_secret"
)

type Credential struct {
	ACL            map[string]interface{} `json:"acl"`
	Cidrs          []string               `json:"cidrs"`
	ClientID       *string                `json:"client_id"`
	CreatedAt      *int64                 `json:"created_at"`
	CreatedByEmail *string                `json:"created_by_email"`
	CreatedByID    *string                `json:"created_by_id"`
	Global         *bool                  `json:"global"`
	ID             string                 `json:"id"`
	LastUsedAt     *int64                 `json:"last_used_at"`
	LastUsedByID   *string                `json:"last_used_by_id"`
	Name           *string                `json:"name"`
	Type           *CredentialTypeEnum    `json:"type"`
}
