import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AutoExportSettingsExportIntervalEnum {
    NoExport = "NoExport",
    Hourly = "Hourly",
    Daily = "Daily",
    Weekly = "Weekly",
    Monthly = "Monthly",
    QuaterYearly = "QuaterYearly",
    HalfYearly = "HalfYearly",
    Yearly = "Yearly"
}
/**
 * Settings for the auto export functionality of a meter
**/
export declare class AutoExportSettings extends SpeakeasyBase {
    exportFormat?: string;
    exportInterval?: AutoExportSettingsExportIntervalEnum;
    meterPointId?: string;
    uploadType?: string;
}
