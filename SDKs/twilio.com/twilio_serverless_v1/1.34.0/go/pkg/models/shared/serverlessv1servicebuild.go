package shared

import (
	"time"
)

type ServerlessV1ServiceBuild struct {
	AccountSid       *string                `json:"account_sid"`
	AssetVersions    []interface{}          `json:"asset_versions"`
	DateCreated      *time.Time             `json:"date_created"`
	DateUpdated      *time.Time             `json:"date_updated"`
	Dependencies     []interface{}          `json:"dependencies"`
	FunctionVersions []interface{}          `json:"function_versions"`
	Links            map[string]interface{} `json:"links"`
	Runtime          *BuildEnumRuntimeEnum  `json:"runtime"`
	ServiceSid       *string                `json:"service_sid"`
	Sid              *string                `json:"sid"`
	Status           *BuildEnumStatusEnum   `json:"status"`
	URL              *string                `json:"url"`
}
