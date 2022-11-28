package shared

// ItemImportRequestOptions
// An optional object to configure `/item/import` request.
type ItemImportRequestOptions struct {
	Webhook *string `json:"webhook,omitempty"`
}
