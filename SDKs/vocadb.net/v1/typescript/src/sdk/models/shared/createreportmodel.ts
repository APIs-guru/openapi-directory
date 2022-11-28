import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CreateReportModelReportTypeEnum {
    MaliciousIp = "MaliciousIP",
    Spamming = "Spamming",
    RemovePermissions = "RemovePermissions",
    Other = "Other"
}


export class CreateReportModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reason, form, name=reason;" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=reportType, form, name=reportType;" })
  reportType?: CreateReportModelReportTypeEnum;
}
