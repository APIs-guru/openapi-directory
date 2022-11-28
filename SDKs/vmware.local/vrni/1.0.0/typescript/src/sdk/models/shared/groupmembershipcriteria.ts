import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IpAddressMembershipCriteria } from "./ipaddressmembershipcriteria";
import { SearchMembershipCriteria } from "./searchmembershipcriteria";


export enum GroupMembershipCriteriaMembershipTypeEnum {
    SearchMembershipCriteria = "SearchMembershipCriteria",
    IpAddressMembershipCriteria = "IPAddressMembershipCriteria"
}


// GroupMembershipCriteria
/** 
 * EntityType currently restricted to VirtualMachine
**/
export class GroupMembershipCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ip_address_membership_criteria" })
  ipAddressMembershipCriteria?: IpAddressMembershipCriteria;

  @SpeakeasyMetadata({ data: "json, name=membership_type" })
  membershipType?: GroupMembershipCriteriaMembershipTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=search_membership_criteria" })
  searchMembershipCriteria?: SearchMembershipCriteria;
}
