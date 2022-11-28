import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IpV4Address extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ip_address" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=netmask" })
  netmask?: string;

  @SpeakeasyMetadata({ data: "json, name=network_address" })
  networkAddress?: string;
}
