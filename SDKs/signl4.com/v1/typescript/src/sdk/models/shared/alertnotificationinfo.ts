import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AlertNotificationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=channelType" })
  channelType?: number;

  @SpeakeasyMetadata({ data: "json, name=deviceName" })
  deviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdate" })
  lastUpdate?: Date;

  @SpeakeasyMetadata({ data: "json, name=messageStatus" })
  messageStatus?: number;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=userStatus" })
  userStatus?: number;
}
