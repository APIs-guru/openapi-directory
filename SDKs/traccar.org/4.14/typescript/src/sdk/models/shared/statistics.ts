import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Statistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeDevices" })
  activeDevices?: number;

  @SpeakeasyMetadata({ data: "json, name=activeUsers" })
  activeUsers?: number;

  @SpeakeasyMetadata({ data: "json, name=captureTime" })
  captureTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=messagesReceived" })
  messagesReceived?: number;

  @SpeakeasyMetadata({ data: "json, name=messagesStored" })
  messagesStored?: number;

  @SpeakeasyMetadata({ data: "json, name=requests" })
  requests?: number;
}
