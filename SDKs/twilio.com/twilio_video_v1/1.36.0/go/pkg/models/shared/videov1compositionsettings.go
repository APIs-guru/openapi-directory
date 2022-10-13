package shared

type VideoV1CompositionSettings struct {
	AccountSid        *string `json:"account_sid"`
	AwsCredentialsSid *string `json:"aws_credentials_sid"`
	AwsS3URL          *string `json:"aws_s3_url"`
	AwsStorageEnabled *bool   `json:"aws_storage_enabled"`
	EncryptionEnabled *bool   `json:"encryption_enabled"`
	EncryptionKeySid  *string `json:"encryption_key_sid"`
	FriendlyName      *string `json:"friendly_name"`
	URL               *string `json:"url"`
}
