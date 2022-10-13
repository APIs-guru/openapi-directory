package shared

type PreviewSyncServiceSyncMapSyncMapPermission struct {
	AccountSid *string `json:"account_sid"`
	Identity   *string `json:"identity"`
	Manage     *bool   `json:"manage"`
	MapSid     *string `json:"map_sid"`
	Read       *bool   `json:"read"`
	ServiceSid *string `json:"service_sid"`
	URL        *string `json:"url"`
	Write      *bool   `json:"write"`
}
