import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AutoExportSettingsExportIntervalEnum {
    NoExport = "NoExport"
,    Hourly = "Hourly"
,    Daily = "Daily"
,    Weekly = "Weekly"
,    Monthly = "Monthly"
,    QuaterYearly = "QuaterYearly"
,    HalfYearly = "HalfYearly"
,    Yearly = "Yearly"
}


// AutoExportSettings
/** 
 * Settings for the auto export functionality of a meter
**/
export class AutoExportSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExportFormat" })
  exportFormat?: string;

  @Metadata({ data: "json, name=ExportInterval" })
  exportInterval?: AutoExportSettingsExportIntervalEnum;

  @Metadata({ data: "json, name=MeterPointId" })
  meterPointId?: string;

  @Metadata({ data: "json, name=UploadType" })
  uploadType?: string;
}
