import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IpAddressMembershipCriteria
/** 
 * Ip Address membership definition
**/
export class IpAddressMembershipCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ip_addresses" })
  ipAddresses?: string[];
}
