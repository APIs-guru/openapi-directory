import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IpCommandEnumDirectionEnum } from "./ipcommandenumdirectionenum";
import { IpCommandEnumPayloadTypeEnum } from "./ipcommandenumpayloadtypeenum";
import { IpCommandEnumStatusEnum } from "./ipcommandenumstatusenum";



export class SupersimV1IpCommand extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=device_ip" })
  deviceIp?: string;

  @SpeakeasyMetadata({ data: "json, name=device_port" })
  devicePort?: number;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: IpCommandEnumDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: string;

  @SpeakeasyMetadata({ data: "json, name=payload_type" })
  payloadType?: IpCommandEnumPayloadTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=sim_iccid" })
  simIccid?: string;

  @SpeakeasyMetadata({ data: "json, name=sim_sid" })
  simSid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: IpCommandEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
