import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AlertNotificationInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=channelType" })
  channelType?: number;

  @Metadata({ data: "json, name=deviceName" })
  deviceName?: string;

  @Metadata({ data: "json, name=lastUpdate" })
  lastUpdate?: Date;

  @Metadata({ data: "json, name=messageStatus" })
  messageStatus?: number;

  @Metadata({ data: "json, name=userId" })
  userId?: string;

  @Metadata({ data: "json, name=userStatus" })
  userStatus?: number;
}
