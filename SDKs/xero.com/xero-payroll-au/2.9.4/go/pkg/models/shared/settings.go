package shared

type SettingsTrackingCategoriesEmployeeGroups struct {
	TrackingCategoryID   *string `json:"TrackingCategoryID"`
	TrackingCategoryName *string `json:"TrackingCategoryName"`
}

type SettingsTrackingCategoriesTimesheetCategories struct {
	TrackingCategoryID   *string `json:"TrackingCategoryID"`
	TrackingCategoryName *string `json:"TrackingCategoryName"`
}

type SettingsTrackingCategories struct {
	EmployeeGroups      *SettingsTrackingCategoriesEmployeeGroups      `json:"EmployeeGroups"`
	TimesheetCategories *SettingsTrackingCategoriesTimesheetCategories `json:"TimesheetCategories"`
}

type Settings struct {
	Accounts           []Account                   `json:"Accounts"`
	DaysInPayrollYear  *int32                      `json:"DaysInPayrollYear"`
	TrackingCategories *SettingsTrackingCategories `json:"TrackingCategories"`
}
