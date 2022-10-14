package shared

type ControllersSystemInlineItem struct {
	Created               *string `json:"created,omitempty"`
	CulledTimestamp       *string `json:"culled_timestamp,omitempty"`
	DisplayName           *string `json:"display_name,omitempty"`
	ID                    *string `json:"id,omitempty"`
	InsightsID            *string `json:"insights_id,omitempty"`
	LastEvaluation        *string `json:"last_evaluation,omitempty"`
	LastUpload            *string `json:"last_upload,omitempty"`
	OsMajor               *string `json:"os_major,omitempty"`
	OsMinor               *string `json:"os_minor,omitempty"`
	OsName                *string `json:"os_name,omitempty"`
	OtherCount            *int64  `json:"other_count,omitempty"`
	PackagesInstalled     *int64  `json:"packages_installed,omitempty"`
	PackagesUpdatable     *int64  `json:"packages_updatable,omitempty"`
	RhbaCount             *int64  `json:"rhba_count,omitempty"`
	RheaCount             *int64  `json:"rhea_count,omitempty"`
	RhsaCount             *int64  `json:"rhsa_count,omitempty"`
	Rhsm                  *string `json:"rhsm,omitempty"`
	Stale                 *bool   `json:"stale,omitempty"`
	StaleTimestamp        *string `json:"stale_timestamp,omitempty"`
	StaleWarningTimestamp *string `json:"stale_warning_timestamp,omitempty"`
	ThirdParty            *bool   `json:"third_party,omitempty"`
}
