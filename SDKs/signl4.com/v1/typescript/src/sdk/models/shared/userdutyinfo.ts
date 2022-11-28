import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserDutyInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastStatusChange" })
  lastStatusChange?: Date;

  @SpeakeasyMetadata({ data: "json, name=onDuty" })
  onDuty?: boolean;

  @SpeakeasyMetadata({ data: "json, name=onManagerDuty" })
  onManagerDuty?: boolean;

  @SpeakeasyMetadata({ data: "json, name=overdue" })
  overdue?: boolean;
}
