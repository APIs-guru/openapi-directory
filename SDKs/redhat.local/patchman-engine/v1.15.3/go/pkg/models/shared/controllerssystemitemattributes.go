package shared

type ControllersSystemItemAttributes struct {
	Created               *string `json:"created"`
	CulledTimestamp       *string `json:"culled_timestamp"`
	DisplayName           *string `json:"display_name"`
	InsightsID            *string `json:"insights_id"`
	LastEvaluation        *string `json:"last_evaluation"`
	LastUpload            *string `json:"last_upload"`
	OsMajor               *string `json:"os_major"`
	OsMinor               *string `json:"os_minor"`
	OsName                *string `json:"os_name"`
	OtherCount            *int64  `json:"other_count"`
	PackagesInstalled     *int64  `json:"packages_installed"`
	PackagesUpdatable     *int64  `json:"packages_updatable"`
	RhbaCount             *int64  `json:"rhba_count"`
	RheaCount             *int64  `json:"rhea_count"`
	RhsaCount             *int64  `json:"rhsa_count"`
	Rhsm                  *string `json:"rhsm"`
	Stale                 *bool   `json:"stale"`
	StaleTimestamp        *string `json:"stale_timestamp"`
	StaleWarningTimestamp *string `json:"stale_warning_timestamp"`
	ThirdParty            *bool   `json:"third_party"`
}
