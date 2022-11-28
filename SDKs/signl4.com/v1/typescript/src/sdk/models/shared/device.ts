import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Device extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appVersion" })
  appVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=osVersion" })
  osVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=ringtone" })
  ringtone?: string;

  @SpeakeasyMetadata({ data: "json, name=ringtoneDisabled" })
  ringtoneDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}
