import { SpeakeasyBase } from "../../../internal/utils";
import { IpAddressMembershipCriteria } from "./ipaddressmembershipcriteria";
import { SearchMembershipCriteria } from "./searchmembershipcriteria";
export declare enum GroupMembershipCriteriaMembershipTypeEnum {
    SearchMembershipCriteria = "SearchMembershipCriteria",
    IpAddressMembershipCriteria = "IPAddressMembershipCriteria"
}
/**
 * EntityType currently restricted to VirtualMachine
**/
export declare class GroupMembershipCriteria extends SpeakeasyBase {
    ipAddressMembershipCriteria?: IpAddressMembershipCriteria;
    membershipType?: GroupMembershipCriteriaMembershipTypeEnum;
    searchMembershipCriteria?: SearchMembershipCriteria;
}
