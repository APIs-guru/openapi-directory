import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CreateReportModelReportTypeEnum {
    MaliciousIp = "MaliciousIP"
,    Spamming = "Spamming"
,    RemovePermissions = "RemovePermissions"
,    Other = "Other"
}


export class CreateReportModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason, form, name=reason;" })
  reason?: string;

  @Metadata({ data: "json, name=reportType, form, name=reportType;" })
  reportType?: CreateReportModelReportTypeEnum;
}
