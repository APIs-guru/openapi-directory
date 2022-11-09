import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SmsCommandEnumDirectionEnum } from "./smscommandenumdirectionenum";
import { SmsCommandEnumStatusEnum } from "./smscommandenumstatusenum";


export class SupersimV1SmsCommand extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=direction" })
  direction?: SmsCommandEnumDirectionEnum;

  @Metadata({ data: "json, name=payload" })
  payload?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=sim_sid" })
  simSid?: string;

  @Metadata({ data: "json, name=status" })
  status?: SmsCommandEnumStatusEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
