package shared

import (
	"time"
)

type ServerlessV1ServiceBuild struct {
	AccountSid       *string                `json:"account_sid,omitempty"`
	AssetVersions    []interface{}          `json:"asset_versions,omitempty"`
	DateCreated      *time.Time             `json:"date_created,omitempty"`
	DateUpdated      *time.Time             `json:"date_updated,omitempty"`
	Dependencies     []interface{}          `json:"dependencies,omitempty"`
	FunctionVersions []interface{}          `json:"function_versions,omitempty"`
	Links            map[string]interface{} `json:"links,omitempty"`
	Runtime          *BuildEnumRuntimeEnum  `json:"runtime,omitempty"`
	ServiceSid       *string                `json:"service_sid,omitempty"`
	Sid              *string                `json:"sid,omitempty"`
	Status           *BuildEnumStatusEnum   `json:"status,omitempty"`
	URL              *string                `json:"url,omitempty"`
}
