package shared

type PreviewSyncServiceSyncListSyncListPermission struct {
	AccountSid *string `json:"account_sid,omitempty"`
	Identity   *string `json:"identity,omitempty"`
	ListSid    *string `json:"list_sid,omitempty"`
	Manage     *bool   `json:"manage,omitempty"`
	Read       *bool   `json:"read,omitempty"`
	ServiceSid *string `json:"service_sid,omitempty"`
	URL        *string `json:"url,omitempty"`
	Write      *bool   `json:"write,omitempty"`
}
