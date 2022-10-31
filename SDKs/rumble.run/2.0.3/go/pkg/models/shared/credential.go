package shared




type CredentialTypeEnum string

const (
    CredentialTypeEnumMiradoreAPIKeyV1 CredentialTypeEnum = "miradore_api_key_v1"
CredentialTypeEnumAwsAccessSecret CredentialTypeEnum = "aws_access_secret"
)


type Credential struct {
    ACL map[string]interface{} `json:"acl,omitempty"`
    Cidrs []string `json:"cidrs,omitempty"`
    ClientID *string `json:"client_id,omitempty"`
    CreatedAt *int64 `json:"created_at,omitempty"`
    CreatedByEmail *string `json:"created_by_email,omitempty"`
    CreatedByID *string `json:"created_by_id,omitempty"`
    Global *bool `json:"global,omitempty"`
    ID string `json:"id"`
    LastUsedAt *int64 `json:"last_used_at,omitempty"`
    LastUsedByID *string `json:"last_used_by_id,omitempty"`
    Name *string `json:"name,omitempty"`
    Type *CredentialTypeEnum `json:"type,omitempty"`
    
}

