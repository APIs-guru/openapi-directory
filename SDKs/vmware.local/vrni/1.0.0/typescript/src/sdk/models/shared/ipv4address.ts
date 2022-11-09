import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class IpV4Address extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip_address" })
  ipAddress?: string;

  @Metadata({ data: "json, name=netmask" })
  netmask?: string;

  @Metadata({ data: "json, name=network_address" })
  networkAddress?: string;
}
