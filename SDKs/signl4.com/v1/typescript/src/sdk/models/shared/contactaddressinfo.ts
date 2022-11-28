import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";



export class ContactAddressInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: number;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=device" })
  device?: Device;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: number;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
