package shared

type APIV2010AccountSipSipCredentialListSipCredential struct {
	AccountSid        *string `json:"account_sid"`
	CredentialListSid *string `json:"credential_list_sid"`
	DateCreated       *string `json:"date_created"`
	DateUpdated       *string `json:"date_updated"`
	Sid               *string `json:"sid"`
	URI               *string `json:"uri"`
	Username          *string `json:"username"`
}
