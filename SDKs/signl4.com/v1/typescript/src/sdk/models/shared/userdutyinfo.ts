import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserDutyInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastStatusChange" })
  lastStatusChange?: Date;

  @Metadata({ data: "json, name=onDuty" })
  onDuty?: boolean;

  @Metadata({ data: "json, name=onManagerDuty" })
  onManagerDuty?: boolean;

  @Metadata({ data: "json, name=overdue" })
  overdue?: boolean;
}
