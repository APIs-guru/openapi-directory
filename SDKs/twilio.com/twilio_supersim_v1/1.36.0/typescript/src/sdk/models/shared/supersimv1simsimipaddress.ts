import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SimIpAddressEnumIpAddressVersionEnum } from "./simipaddressenumipaddressversionenum";


export class SupersimV1SimSimIpAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip_address" })
  ipAddress?: string;

  @Metadata({ data: "json, name=ip_address_version" })
  ipAddressVersion?: SimIpAddressEnumIpAddressVersionEnum;
}
