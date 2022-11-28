package shared

// SettingsTrackingCategoriesEmployeeGroups
// The tracking category used for employees
type SettingsTrackingCategoriesEmployeeGroups struct {
	TrackingCategoryID   *string `json:"TrackingCategoryID,omitempty"`
	TrackingCategoryName *string `json:"TrackingCategoryName,omitempty"`
}

// SettingsTrackingCategoriesTimesheetCategories
// The tracking category used for timesheets
type SettingsTrackingCategoriesTimesheetCategories struct {
	TrackingCategoryID   *string `json:"TrackingCategoryID,omitempty"`
	TrackingCategoryName *string `json:"TrackingCategoryName,omitempty"`
}

// SettingsTrackingCategories
// Tracking categories for Employees and Timesheets
type SettingsTrackingCategories struct {
	EmployeeGroups      *SettingsTrackingCategoriesEmployeeGroups      `json:"EmployeeGroups,omitempty"`
	TimesheetCategories *SettingsTrackingCategoriesTimesheetCategories `json:"TimesheetCategories,omitempty"`
}

type Settings struct {
	Accounts           []Account                   `json:"Accounts,omitempty"`
	DaysInPayrollYear  *int32                      `json:"DaysInPayrollYear,omitempty"`
	TrackingCategories *SettingsTrackingCategories `json:"TrackingCategories,omitempty"`
}
