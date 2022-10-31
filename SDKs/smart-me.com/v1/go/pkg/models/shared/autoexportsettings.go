package shared




type AutoExportSettingsExportIntervalEnum string

const (
    AutoExportSettingsExportIntervalEnumNoExport AutoExportSettingsExportIntervalEnum = "NoExport"
AutoExportSettingsExportIntervalEnumHourly AutoExportSettingsExportIntervalEnum = "Hourly"
AutoExportSettingsExportIntervalEnumDaily AutoExportSettingsExportIntervalEnum = "Daily"
AutoExportSettingsExportIntervalEnumWeekly AutoExportSettingsExportIntervalEnum = "Weekly"
AutoExportSettingsExportIntervalEnumMonthly AutoExportSettingsExportIntervalEnum = "Monthly"
AutoExportSettingsExportIntervalEnumQuaterYearly AutoExportSettingsExportIntervalEnum = "QuaterYearly"
AutoExportSettingsExportIntervalEnumHalfYearly AutoExportSettingsExportIntervalEnum = "HalfYearly"
AutoExportSettingsExportIntervalEnumYearly AutoExportSettingsExportIntervalEnum = "Yearly"
)


type AutoExportSettings struct {
    ExportFormat *string `json:"ExportFormat,omitempty"`
    ExportInterval *AutoExportSettingsExportIntervalEnum `json:"ExportInterval,omitempty"`
    MeterPointID *string `json:"MeterPointId,omitempty"`
    UploadType *string `json:"UploadType,omitempty"`
    
}

