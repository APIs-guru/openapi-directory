package shared

type PreviewSyncServiceSyncListSyncListPermission struct {
	AccountSid *string `json:"account_sid"`
	Identity   *string `json:"identity"`
	ListSid    *string `json:"list_sid"`
	Manage     *bool   `json:"manage"`
	Read       *bool   `json:"read"`
	ServiceSid *string `json:"service_sid"`
	URL        *string `json:"url"`
	Write      *bool   `json:"write"`
}
