import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Device } from "./device";


export class ContactAddressInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=channel" })
  channel?: number;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=device" })
  device?: Device;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastUpdated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=options" })
  options?: number;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
