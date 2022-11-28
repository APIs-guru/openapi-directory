import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimIpAddressEnumIpAddressVersionEnum } from "./simipaddressenumipaddressversionenum";



export class SupersimV1SimSimIpAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ip_address" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=ip_address_version" })
  ipAddressVersion?: SimIpAddressEnumIpAddressVersionEnum;
}
