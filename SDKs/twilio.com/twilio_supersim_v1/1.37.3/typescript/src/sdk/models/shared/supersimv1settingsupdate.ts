import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SettingsUpdateEnumStatusEnum } from "./settingsupdateenumstatusenum";



export class SupersimV1SettingsUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date_completed" })
  dateCompleted?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=iccid" })
  iccid?: string;

  @SpeakeasyMetadata({ data: "json, name=packages" })
  packages?: any[];

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=sim_sid" })
  simSid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SettingsUpdateEnumStatusEnum;
}
