package shared




type CredentialOptionsTypeEnum string

const (
    CredentialOptionsTypeEnumMiradoreAPIKeyV1 CredentialOptionsTypeEnum = "miradore_api_key_v1"
CredentialOptionsTypeEnumAwsAccessSecret CredentialOptionsTypeEnum = "aws_access_secret"
)


type CredentialOptions struct {
    ACL map[string]interface{} `json:"acl,omitempty"`
    Cidrs *string `json:"cidrs,omitempty"`
    Global *bool `json:"global,omitempty"`
    Name *string `json:"name,omitempty"`
    Secret map[string]interface{} `json:"secret,omitempty"`
    Type *CredentialOptionsTypeEnum `json:"type,omitempty"`
    
}

