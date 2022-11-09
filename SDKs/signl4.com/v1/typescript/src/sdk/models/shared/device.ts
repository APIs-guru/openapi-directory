import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Device extends SpeakeasyBase {
  @Metadata({ data: "json, name=appVersion" })
  appVersion?: string;

  @Metadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=osVersion" })
  osVersion?: string;

  @Metadata({ data: "json, name=ringtone" })
  ringtone?: string;

  @Metadata({ data: "json, name=ringtoneDisabled" })
  ringtoneDisabled?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: number;
}
