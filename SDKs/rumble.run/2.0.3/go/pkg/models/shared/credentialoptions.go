package shared

type CredentialOptionsTypeEnum string

const (
	CredentialOptionsTypeEnumMiradoreAPIKeyV1 CredentialOptionsTypeEnum = "miradore_api_key_v1"
	CredentialOptionsTypeEnumAwsAccessSecret  CredentialOptionsTypeEnum = "aws_access_secret"
)

type CredentialOptions struct {
	ACL    map[string]interface{}     `json:"acl"`
	Cidrs  *string                    `json:"cidrs"`
	Global *bool                      `json:"global"`
	Name   *string                    `json:"name"`
	Secret map[string]interface{}     `json:"secret"`
	Type   *CredentialOptionsTypeEnum `json:"type"`
}
