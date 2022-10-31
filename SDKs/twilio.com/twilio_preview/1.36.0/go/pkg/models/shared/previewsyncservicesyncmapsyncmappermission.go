package shared

type PreviewSyncServiceSyncMapSyncMapPermission struct {
	AccountSid *string `json:"account_sid,omitempty"`
	Identity   *string `json:"identity,omitempty"`
	Manage     *bool   `json:"manage,omitempty"`
	MapSid     *string `json:"map_sid,omitempty"`
	Read       *bool   `json:"read,omitempty"`
	ServiceSid *string `json:"service_sid,omitempty"`
	URL        *string `json:"url,omitempty"`
	Write      *bool   `json:"write,omitempty"`
}
