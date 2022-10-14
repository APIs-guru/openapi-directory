package shared

type APIV2010AccountSipSipCredentialListSipCredential struct {
	AccountSid        *string `json:"account_sid,omitempty"`
	CredentialListSid *string `json:"credential_list_sid,omitempty"`
	DateCreated       *string `json:"date_created,omitempty"`
	DateUpdated       *string `json:"date_updated,omitempty"`
	Sid               *string `json:"sid,omitempty"`
	URI               *string `json:"uri,omitempty"`
	Username          *string `json:"username,omitempty"`
}
