import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Statistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeDevices" })
  activeDevices?: number;

  @Metadata({ data: "json, name=activeUsers" })
  activeUsers?: number;

  @Metadata({ data: "json, name=captureTime" })
  captureTime?: Date;

  @Metadata({ data: "json, name=messagesReceived" })
  messagesReceived?: number;

  @Metadata({ data: "json, name=messagesStored" })
  messagesStored?: number;

  @Metadata({ data: "json, name=requests" })
  requests?: number;
}
