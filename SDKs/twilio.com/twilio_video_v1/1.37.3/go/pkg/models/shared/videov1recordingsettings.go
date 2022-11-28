package shared

type VideoV1RecordingSettings struct {
	AccountSid        *string `json:"account_sid,omitempty"`
	AwsCredentialsSid *string `json:"aws_credentials_sid,omitempty"`
	AwsS3URL          *string `json:"aws_s3_url,omitempty"`
	AwsStorageEnabled *bool   `json:"aws_storage_enabled,omitempty"`
	EncryptionEnabled *bool   `json:"encryption_enabled,omitempty"`
	EncryptionKeySid  *string `json:"encryption_key_sid,omitempty"`
	FriendlyName      *string `json:"friendly_name,omitempty"`
	URL               *string `json:"url,omitempty"`
}
