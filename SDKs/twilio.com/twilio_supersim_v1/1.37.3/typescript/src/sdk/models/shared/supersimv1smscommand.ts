import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SmsCommandEnumDirectionEnum } from "./smscommandenumdirectionenum";
import { SmsCommandEnumStatusEnum } from "./smscommandenumstatusenum";



export class SupersimV1SmsCommand extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: SmsCommandEnumDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=sim_sid" })
  simSid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SmsCommandEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
