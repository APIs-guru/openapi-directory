import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IpCommandEnumDirectionEnum } from "./ipcommandenumdirectionenum";
import { IpCommandEnumPayloadTypeEnum } from "./ipcommandenumpayloadtypeenum";
import { IpCommandEnumStatusEnum } from "./ipcommandenumstatusenum";


export class SupersimV1IpCommand extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=device_ip" })
  deviceIp?: string;

  @Metadata({ data: "json, name=device_port" })
  devicePort?: number;

  @Metadata({ data: "json, name=direction" })
  direction?: IpCommandEnumDirectionEnum;

  @Metadata({ data: "json, name=payload" })
  payload?: string;

  @Metadata({ data: "json, name=payload_type" })
  payloadType?: IpCommandEnumPayloadTypeEnum;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=sim_iccid" })
  simIccid?: string;

  @Metadata({ data: "json, name=sim_sid" })
  simSid?: string;

  @Metadata({ data: "json, name=status" })
  status?: IpCommandEnumStatusEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
