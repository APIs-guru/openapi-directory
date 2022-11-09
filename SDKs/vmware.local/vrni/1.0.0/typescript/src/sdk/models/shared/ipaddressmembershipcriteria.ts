import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IpAddressMembershipCriteria
/** 
 * Ip Address membership definition
**/
export class IpAddressMembershipCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip_addresses" })
  ipAddresses?: string[];
}
