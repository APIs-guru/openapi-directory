import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AutoExportSettingsExportIntervalEnum {
    NoExport = "NoExport",
    Hourly = "Hourly",
    Daily = "Daily",
    Weekly = "Weekly",
    Monthly = "Monthly",
    QuaterYearly = "QuaterYearly",
    HalfYearly = "HalfYearly",
    Yearly = "Yearly"
}


// AutoExportSettings
/** 
 * Settings for the auto export functionality of a meter
**/
export class AutoExportSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExportFormat" })
  exportFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=ExportInterval" })
  exportInterval?: AutoExportSettingsExportIntervalEnum;

  @SpeakeasyMetadata({ data: "json, name=MeterPointId" })
  meterPointId?: string;

  @SpeakeasyMetadata({ data: "json, name=UploadType" })
  uploadType?: string;
}
