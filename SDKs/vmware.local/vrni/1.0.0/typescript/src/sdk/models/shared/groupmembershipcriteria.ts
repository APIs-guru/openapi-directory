import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IpAddressMembershipCriteria } from "./ipaddressmembershipcriteria";
import { SearchMembershipCriteria } from "./searchmembershipcriteria";

export enum GroupMembershipCriteriaMembershipTypeEnum {
    SearchMembershipCriteria = "SearchMembershipCriteria"
,    IpAddressMembershipCriteria = "IPAddressMembershipCriteria"
}


// GroupMembershipCriteria
/** 
 * EntityType currently restricted to VirtualMachine
**/
export class GroupMembershipCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip_address_membership_criteria" })
  ipAddressMembershipCriteria?: IpAddressMembershipCriteria;

  @Metadata({ data: "json, name=membership_type" })
  membershipType?: GroupMembershipCriteriaMembershipTypeEnum;

  @Metadata({ data: "json, name=search_membership_criteria" })
  searchMembershipCriteria?: SearchMembershipCriteria;
}
